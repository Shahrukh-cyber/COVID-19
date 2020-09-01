import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Orientation from 'react-native-orientation';


export default class CovidHome extends Component {
  state = {
    screenWidth: null,
    screenHeight: null,
  }

  _onLayout(e) {
    console.log("Screen Orientation Changed...")
    this.setState({
      screenWidth: Dimensions.get('window').width,
      screenHeight: Dimensions.get('window').height
    })

  }


  componentDidMount() {

    loc(this);
    Orientation.lockToPortrait();

  }

  render() {
    return (
      <View >




      </View>
    )
  }
}




