import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Form, Button, Label } from 'native-base';

export default class UploadOriginal extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Label>Upload original dance routine</Label>
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
})
