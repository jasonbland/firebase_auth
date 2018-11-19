import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, FormInput, FormLabel } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-one-time-password-296fa.cloudfunctions.net/';

handleSubmit = async () => {
  try {
    let { data } = await axios.post(`${ROOT_URL}verifyOneTimePassword`, {
      phone: this.state.phone,
      code: this.state.code
    });

    firebase.auth().signInWithCustomToken(data.token);
  } catch (err) {
    console.log(err);
  }
};

class SignInForm extends Component {
  state = { phone: '', code: '' };

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput value={this.state.phone} onChangeText={phone => this.setState({ phone })} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Code</FormLabel>
          <FormInput value={this.state.code} onChangeText={code => this.setState({ code })} />
        </View>
        <Button onPress={this.handleSubmit} title="Submit" />
      </View>
    );
  }
}

export default SignInForm;
