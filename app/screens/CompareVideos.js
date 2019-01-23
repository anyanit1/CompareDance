import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Form, Button, Label } from 'native-base';

export default class CompareVideos extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Label>Compare dance videos</Label>
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
