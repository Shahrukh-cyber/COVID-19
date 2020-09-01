import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class App extends Component {
  state = {
    screenWidth: null,
    screenHeight: null,
  }

  


  

  render() {
    const { screenHeight, screenWidth } = this.state
    const styles = StyleSheet.create({
      mainContainer: {
        width: wp('100%')


      },

      partialTop: {

        backgroundColor: 'white',
        width: wp('100%'),
        height: hp('17%'),
        flexDirection: 'row',

      },
      partial: {

        backgroundColor: 'white',
        width: wp('100%'),
        height: hp('17%'),
        flexDirection: 'row',
        marginTop: hp('1%')
      },
      image: {

        width: wp('22%'),
        height: hp('12%'),
        marginLeft:hp('1%')

      },

      text: {
        fontSize: hp('3%'),
        color:'black',
        fontWeight:'bold',
        marginLeft:hp('2%')



      },

    });

    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.partial}>
            <Image source={require('C:/Users/SHAHRUKH/COVID/Images/Preventions/HandWash.png')} style={styles.image} />
            <Text style={styles.text}>Clean your hands</Text>
            <View style={{ margin: hp('2%'), marginTop: hp('5%'), marginLeft: hp('-21%'), height: hp('13.5%'), width: wp('60%') }}>
              <Text style={{ fontSize: hp('2%'), fontStyle: 'italic' }}>Wash your hands often with soap and water for at least 20 seconds. </Text>
            </View>



          </View>



          <View style={styles.partial}>
            <Image source={require('C:/Users/SHAHRUKH/COVID/Images/Preventions/Mask.png')} style={styles.image} />
            <Text style={styles.text}>Wear a facemask</Text>
            <View style={{ margin: hp('2%'), marginTop: hp('5%'), marginLeft: hp('-21%'), height: hp('13%'), width: wp('60%') }}>
              <Text style={{ fontSize: hp('2%'), fontStyle: 'italic' }}>You should wear a facemask when you are around other peoples.</Text>
            </View>

          </View>


          <View style={styles.partial}>
            <Image source={require('C:/Users/SHAHRUKH/COVID/Images/Preventions/shakehand.png')} style={styles.image} />
            <Text style={styles.text}>Do not hand shake</Text>
            <View style={{ margin: hp('2%'), marginTop: hp('5%'), marginLeft: hp('-22%'), height: hp('13%'), width: wp('60%') }}>
              <Text style={{ fontSize: hp('2%'), fontStyle: 'italic' }}>Don't handshake to people say Asalam-O-Alikum loud.</Text>
            </View>


          </View>


          <View style={styles.partial}>
            <Image source={require('C:/Users/SHAHRUKH/COVID/Images/Preventions/SocailDistance.png')} style={styles.image} />
            <Text style={styles.text}>Social Distancing</Text>
            <View style={{ margin: hp('2%'), marginTop: hp('5%'), marginLeft: hp('-20.5%'), height: hp('13%'), width: wp('60%') }}>
              <Text style={{ fontSize: hp('2%'), fontStyle: 'italic' }}>Maintain Distancing at least 1 metre (3 feet) between yourself and other peoples. </Text>
            </View>


          </View>

          <View style={styles.partial}>
            <Image source={require('C:/Users/SHAHRUKH/COVID/Images/Preventions/Stayhome.png')} style={styles.image} />
            <Text style={styles.text}> Stay home and Safe</Text>
            <View style={{ margin: hp('2%'), marginTop: hp('5%'), marginLeft: hp('-24%'), height: hp('13%'), width: wp('60%') }}>
              <Text style={{ fontSize: hp('2%'), fontStyle: 'italic' }}>Do not go outside of the home except emergency and stop to spreading covid-19</Text>
            </View>


          </View>


        </View>

      </ScrollView>
    );
  }
}