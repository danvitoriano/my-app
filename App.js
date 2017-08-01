import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Button from 'react-native-button';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Your Name' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>MY FIRST APP
        </Text>
        <Text style={styles.text}>Made with React Native
        </Text>
        <Image source={require('./assets/images/logo-oi.png')} />
        <TextInput
        style={{height: 40, width:200, backgroundColor:'white', borderColor: 'gray', borderWidth: 1, color: 'gray'}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      <Button
        style={{fontSize: 20, color: 'green', backgroundColor: 'white', width: 200}}
        styleDisabled={{color: 'red'}}
        onPress={() => this._handlePress()}>
        Press Me!
      </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    color: '#fff',
    fontSize: 30,
  }
  ,
  text: {
    color: 'yellow',
    fontSize: 20,
  },
});
