import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, FormInput, FormLabel } from 'react-native-elements';

class SignUpForm extends Component {
  render() {
    return (
      <View>
        <FormLabel>Enter Phone Number</FormLabel>
        <FormInput />
        <Button title="Submit" />
      </View>
    );
  }
}

export default SignUpForm;
