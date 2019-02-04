import React from 'react';
import { StyleSheet, ImageEditor, Image, View, ActivityIndicator } from 'react-native';
import { Container, Form, Button, Label } from 'native-base';
import { ImagePicker, Permissions, Video } from 'expo';
import ApiKeys from './../../constants/APIKeys';

export default class CompareVideos extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      image: null,
      isLoading: true,
      dataSource: null,
      //push: false,
    };
  }

  componentDidMount () {
    const { navigation } = this.props;
    const jpeg = navigation.getParam('jpeg');


    return fetch('https://api-us.faceplusplus.com/humanbodypp/v2/segment', {
      method: 'POST',
      body: JSON.stringify({
        api_Key: 'vV7kf0_Gr8nw0KCCC_i8HPtCI8PuGcFs',
        api_secret: 'K8WvKZUJYmpzGQncpr8-2zXz3D7amk47',
        image_file: jpeg,
      }),
    })
      .then ( (response) => response.json() )
      .then( (responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.result,
          //push: true
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  pickImage = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      aspect: 1,
      allowsEditing: true,
      //mediaTypes: 'Videos'
    });
    if (!cancelled) this.setState({ image: uri });
  }


  render() {

    if (this.state.isLoading) {
      return (
        <Container style={styles.container}>
          <ActivityIndicator />
        </Container>
      )
    } else {


    let { image } = this.state;
    let pic = this.state.dataSource.map((string) => {
      return (
        <Form>
          <Image source={string} style={{ margin: 50, width: 300, height: 300}}/>
        </Form>
      )
    });

    // if (!this.state.push){
    // let pic = this.state.dataSource.map((jpeg) => {
    //   return <Image source={jpeg} style={{ margin: 50, width: 300, height: 300}}/>
    // }


    return (
      <Container style={styles.container}>

        <Form>
          {image &&
            <Image source={{ uri: image }}
                  style={{ margin: 50, width: 300, height: 300}}
                  //shouldPlay
                  //isLooping
                  //useNativeControls
                  />}

          {pic}
        </Form>

        <Form>
        <Button style={styles.buttons}
                full
                onPress={this.pickImage}>
                <Label style={{textAlign: 'center'}}>Upload image</Label>
        </Button>

        <Button style={styles.buttons}
                full
                onPress={this.getBody}>
                <Label style={{textAlign: 'center'}}>Body Recognition</Label>
        </Button>
        </Form>

      </Container>
    );
  }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },

  buttons: {
    alignSelf: 'center',
    height: 100,
    width: 200,
    padding: 15,
    marginBottom: 100
  },
})
