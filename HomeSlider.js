import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { SliderBox } from "react-native-image-slider-box";

export default class HomeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('C:/Users/SHAHRUKH/COVID/Images/HomeSlider/HomeSlider1.jpg'),
        require('C:/Users/SHAHRUKH/COVID/Images/HomeSlider/HomeSlider2.jpg'),
        require('C:/Users/SHAHRUKH/COVID/Images/HomeSlider/HomeSlider3.jpg'),
        require('C:/Users/SHAHRUKH/COVID/Images/HomeSlider/HomeSlider4.jpg'),
        require('C:/Users/SHAHRUKH/COVID/Images/HomeSlider/HomeSlider5.jpg'),
        require('C:/Users/SHAHRUKH/COVID/Images/HomeSlider/HomeSlider6.jpg'),
        require('C:/Users/SHAHRUKH/COVID/Images/HomeSlider/HomeSlider7.jpg'),
        require('C:/Users/SHAHRUKH/COVID/Images/HomeSlider/HomeSlider8.jpg')
      ]
    };
  }

  render() {
    return (
      <View>
        <SliderBox
          images={this.state.images}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    height:"50%",
    marginTop:300
  }
});