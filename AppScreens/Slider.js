import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';


import { SliderBox } from "react-native-image-slider-box";

export default class HomeSlider extends Component {
  componentDidMount() {
    loc(this);
  }
  
  componentWillUnMount() {
    rol();
  }
  
  
  
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('C:/Users/SHAHRUKH/COVID/Images/coronavirus1.jpeg'),
        require('C:/Users/SHAHRUKH/COVID/Images/coronavirus2.jpeg'),
        require('C:/Users/SHAHRUKH/COVID/Images/coronavirus3.jpeg'),
        require('C:/Users/SHAHRUKH/COVID/Images/coronavirus4.jpeg'),
        require('C:/Users/SHAHRUKH/COVID/Images/coronavirus5.jpeg'),
        require('C:/Users/SHAHRUKH/COVID/Images/coronavirus6.jpeg'),
      ]
    };
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
      },
      responsiveBox: {
        width: wp('84.5%'),
        height: hp('17%'),
        borderWidth: 2,
        borderColor: 'orange',
        flexDirection: 'column',
        justifyContent: 'space-around' 
      },
      text: {
        color: 'white'
      }
    });


    return (
      <View>



        
        <SliderBox
      
          images={this.state.images}/>
      </View>
    );
  }
}

