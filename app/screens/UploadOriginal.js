import React from 'react';
import { StyleSheet, ImageEditor, Image, View } from 'react-native';
import { Container, Form, Button, Label } from 'native-base';
import { ImagePicker, Permissions } from 'expo';

export default class UploadOriginal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      image: null,
    };
  }

  pickImage = async () => {
    let result = await Expo.ImagePicker.launchImageLibraryAsync({
      //mediaTypes: 'video',
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (result.cancelled) {
      console.log('got here');
      return;
    }

    let resizedUri = await new Promise((resolve, reject) => {
      ImageEditor.cropImage(result.uri,
        {
          offset: { x: 0, y: 0 },
          size: { width: result.width, height: result.height },
          displaySize: { width: 50, height: 50 },
          resizeMode: 'contain',
        },
        (uri) => resolve(uri),
        () => reject(),
      );
    });

    this.setState({ image: resizedUri });
  }
}

  render() {
    let { image } = this.state;

    return (
      <Container style={styles.container}>
        <Button style={styles.buttons}
                full
                onPress={this.pickImage}>
                <Label>Upload original dance routine</Label>
        </Button>

        <View>
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, resizeMode: 'contain'}}/>}
        </View>
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
    backgroundColor: '#778899',
  },

  buttons: {
    alignSelf: 'center',
    height: '50%',
    width: '50%',
  },
})
