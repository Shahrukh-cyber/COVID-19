import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  

export default class test extends Component {
    render() {
        return (
            <View style={styles.partial}>
                <Image source={require('C:/Users/SHAHRUKH/COVID/Images/Cough.jpg')} style={screenHeight > screenWidth ? styles.imagePortrait : styles.imageLandscape} onLayout={this._onLayout.bind(this)} />
                <Text style={styles.text}> Cough</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    mainContainer:{
      width:wp('100%')
  
  
    },
    
    partialTop:{
    
      backgroundColor:'white',
      width:wp('100%'),
      height:hp('17%'),
      flexDirection:'row',
      
    },
    partial:{
    
      backgroundColor:'white',
      width:wp('100%'),
      height:hp('17%'),
      flexDirection:'row',
      marginTop:7
    },
      imagePortrait:{
  
      width:wp('35%'),
      height:hp('17%')
  
    },
    imageLandscape:{
  
      width:wp('16%'),
      height:hp('20%')
  
    },
    
    
    text:{
      fontSize: hp('3%'),
      
  
    },
    
  });
  
 

