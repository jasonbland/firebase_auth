import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, FormInput, FormLabel } from 'react-native-elements';

class SignUpForm extends Component {
  state = { phone: '' };

  handleSubmit = () => {};

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput value={this.state.phone} onChangeText={phone => this.setState({ phone })} />
        </View>
        <Button onPress={this.handleSubmit} title="Submit" />
      </View>
    );
  }
}

export default SignUpForm;
