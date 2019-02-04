import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Form, Label, Button } from 'native-base';
import { ImagePicker, Permissions, Video } from 'expo';

export default class Home extends React.Component {
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
      //mediaTypes: 'Videos'
    });
    if (!cancelled) this.setState({ image: uri });

    this.props.navigation.navigate('BodyRecog', {
      jpeg: uri,
    });
  }

  render() {
    return (
      <Container style={styles.container}>

        <Form style={styles.buttonRow}>
          <Button style={styles.uploadButtons}
                  full
                  onPress={() => this.props.navigation.navigate('Original')}>
                  <Label style={styles.buttonText}>Upload original routine</Label>
          </Button>

          <Button style={styles.uploadButtons}
                  full
                  onPress={() => this.props.navigation.navigate('Practice')}>
                  <Label style={styles.buttonText}>Upload practice routine</Label>
          </Button>
        </Form>

        <Form style={styles.buttonColumn}>
          <Button style={styles.buttons}
                  full
                  onPress={() => this.props.navigation.navigate('Compare')}>
                  <Label style={styles.buttonText}>Compare accuracy of both videos</Label>
          </Button>

          <Button style={styles.buttons}
                  full
                  onPress={this.pickImage}>
                  <Label style={styles.buttonText}>Test body recognition</Label>
          </Button>
        </Form>

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

  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  buttonColumn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  uploadButtons: {
    alignSelf: 'center',
    height: 100,
    width: 150,
    // marginLeft: 10,
    // marginRight: 10,
    margin: 10
  },

  buttons: {
    alignSelf: 'center',
    height: 100,
    width: 250,
    margin: 50
    //marginLeft: 10,
    //marginRight: 10,
  },

  buttonText: {
    textAlign: 'center',
  },
});
