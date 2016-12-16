import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native'

const { width, height } = Dimensions.get("window");

const background = require("./signup_bg.png");
const backIcon = require("./back.png");
const personIcon = require("./signup_person.png");
const lockIcon = require("./signup_lock.png");
const emailIcon = require("./signup_email.png");
const birthdayIcon = require("./signup_birthday.png");

export default class SignupVriew extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={background} style={styles.bg} resizeMode="cover" />
        <View style={styles.headerIconView}>
          <TouchableOpacity style={styles.headerBackButtonView}>
            <Image source={backIcon} style={styles.backButtonIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerTitleView}>
          <Text style={styles.titleViewText}>Sign Up</Text>
        </View>
        <View style={styles.inputs}>
          <View style={styles.inputContainer}>
            <View style={styles.imageContainer}>
              <Image source={personIcon} style={styles.inputIcon} />
            </View>
            <TextInput
              style={[styles.input, styles.whiteFont]}
              placeholder="Name"
              placeholderTextColor="#FFF"
              underlineColorAndroid='transparent' />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.imageContainer}>
              <Image source={emailIcon} style={styles.inputIcon} />
            </View>
            <TextInput
              style={[styles.input, styles.whiteFont]}
              placeholder="Email"
              placeholderTextColor="#FFF" />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.imageContainer}>
              <Image source={lockIcon} style={styles.inputIcon} />
            </View>
            <TextInput
              secureTextEntry={true}
              style={[styles.input, styles.whiteFont]}
              placeholder="Password"
              placeholderTextColor="#FFF" />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.imageContainer}>
              <Image source={birthdayIcon} style={styles.inputIcon} />
            </View>
            <TextInput
              style={[styles.input, styles.whiteFont]}
              placeholder="Birthday"
              placeholderTextColor="#FFF"
              underlineColorAndroid='transparent' />
          </View>
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.signupView}>
            <TouchableOpacity
              style={styles.signup}>
              <Text style={styles.signupText}>Join</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.signin}>
            <Text style={styles.greyFont}>Already have an account?<Text style={styles.whiteFont}> Sign In</Text></Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'transparent'
  },
  bg: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  headerIconView: {
    flex: .1,
    backgroundColor: 'transparent'
  },
  headerBackButtonView: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: 35,
    left: 15,
  },
  backButtonIcon: {
    resizeMode: 'contain',
    width: 25,
    height: 25
  },
  headerTitleView: {
    flex: 0.1,
    backgroundColor: 'transparent',
    paddingLeft: 25,
  },
  titleViewText: {
    fontSize: 40,
    color: '#fff',
  },
  errorText: {
    color: '#FF3366',
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 15,
  },
  inputs: {
    paddingTop: 20,
    paddingBottom: 10,
    flex: .40
  },
  footerContainer: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupView: {
    paddingTop: 20,
  },
  signup: {
    backgroundColor: '#FF3366',
    height: 50,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupText: {
    color: '#FFF',
  },
  signin: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.05
  },
  inputIcon: {
    width: 25,
    height: 25,
  },
  imageContainer: {
    paddingLeft: 20,
    paddingRight: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
      borderWidth: 1,
      paddingBottom: 10,
      borderBottomColor: '#CCC',
      borderColor: 'transparent',
      flexDirection: 'row'
  },
  input: {
      height: 50,
      flex: 10,
      paddingLeft: 20,
      fontSize: 22,
  },
  forgotContainer: {
    paddingTop:10,
    paddingRight: 10,
  },
  forgotText: {
    fontSize: 13,
    alignSelf: 'flex-end',
    color: '#D8D8D8',
  },
  greyFont: {
    color: '#D8D8D8'
  },
  whiteFont: {
    color: '#FFF'
  }
})
