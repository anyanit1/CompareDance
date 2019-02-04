import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Form, Button, Label } from 'native-base';

export default class UploadPractice extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      image: null,
    };
  }

  pickImage = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      aspect: 1,
      allowsEditing: true,
      mediaTypes: 'Videos'
    });
    if (!cancelled) this.setState({ image: uri });
  }

  render() {
    let { image } = this.state;

    return (
      <Container style={styles.container}>

        <Form>
          {image &&
            <Video source={{ uri: image }}
                  style={{ margin: 50, width: 300, height: 300}}
                  //shouldPlay
                  //isLooping
                  useNativeControls/>}
        </Form>

        <Button style={styles.buttons}
                full
                onPress={this.pickImage}>
                <Label style={{textAlign: 'center'}}>Upload practice dance routine</Label>
        </Button>
      </Container>
    );
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
    height: 200,
    width: 200,
    padding: 15,
    marginBottom: 100
  },
})
