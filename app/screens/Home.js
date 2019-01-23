import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Form, Label, Button } from 'native-base';

export default class Home extends React.Component {
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

        <Form>
          <Button style={styles.buttons}
                  full
                  onPress={() => this.props.navigation.navigate('Compare')}>
                  <Label style={styles.buttonText}>Compare accuracy of both videos</Label>
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
    backgroundColor: '#778899',
  },

  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  uploadButtons: {
    alignSelf: 'center',
    height: '15%',
    width: '40%',
    marginLeft: 10,
    marginRight: 10,
  },

  buttons: {
    alignSelf: 'center',
    height: '40%',
    width: '50%',
    //marginLeft: 10,
    //marginRight: 10,
  },

  buttonText: {
    textAlign: 'center',
  },
});
