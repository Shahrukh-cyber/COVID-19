import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class App extends Component {
  
  render() {
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
        marginTop: 7
      },
      image: {

        width: wp('35%'),
        height: hp('17%')

      },

      text: {
        fontSize: hp('3%'),


      },

    });
    return (


<ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.partialTop}>
            <Image source={require('C:/Users/SHAHRUKH/COVID/Images/Fever.jpg')} style={styles.image} />
            <Text style={styles.text}> Fever</Text>
            <View style={{ margin: hp('2%'), marginTop: hp('4.5%'), marginLeft: hp('-7%'), height: hp('13.5%'), width: wp('60%') }}>
              <Text style={{ fontSize: hp('2%'), fontStyle: 'italic' }}> A fever is technically defined as 100.4°F or higher and a fever isn’t necessarily a bad thing or not even necessarily to indicate Covid-19.</Text>
            </View>



          </View>



          <View style={styles.partial}>
            <Image source={require('C:/Users/SHAHRUKH/COVID/Images/Cough.jpg')} style={styles.image} />
            <Text style={styles.text}> Cough</Text>
            <View style={{ margin: hp('2%'), marginTop: hp('4.5%'), marginLeft: hp('-8%'), height: hp('13%'), width: wp('60%') }}>
              <Text style={{ fontSize: hp('2%'), fontStyle: 'italic' }}>All Cough is not linked to Corona Virus Disease (COVID-19). According to WHO only (59.4%) people have Cough in Covid-19.</Text>
            </View>




          </View>

          <View style={styles.partial}>
            <Image source={require('C:/Users/SHAHRUKH/COVID/Images/Breath.jpg')} style={styles.image} />
            <Text style={styles.text}>Shortness of Breath</Text>
            <View style={{ margin: hp('2%'), marginTop: hp('4.5%'), marginLeft: hp('-24.5%'), height: hp('13%'), width: wp('60%') }}>
              <Text style={{ fontSize: hp('2%'), fontStyle: 'italic' }}>Shortness of breath is the feeling that you are out of breath, like you can’t catch your breath.SOB is less common than fever and cough about 30% of people hospitalized. </Text>
            </View>

          </View>


          <View style={styles.partial}>
            <Image source={require('C:/Users/SHAHRUKH/COVID/Images/Headache.jpg')} style={styles.image} />
            <Text style={styles.text}> Headache</Text>
            <View style={{ margin: hp('2%'), marginTop: hp('4.5%'), marginLeft: hp('-13%'), height: hp('13%'), width: wp('60%') }}>
              <Text style={{ fontSize: hp('2%'), fontStyle: 'italic' }}>A headache isn't a common symptom of the virus, but about 14% of people infected with corna have experienced it, according to the Report of the WHO-China.</Text>
            </View>


          </View>


          <View style={styles.partial}>
            <Image source={require('C:/Users/SHAHRUKH/COVID/Images/Sorethroat.jpg')} style={styles.image} />
            <Text style={styles.text}> Sorethroat</Text>
            <View style={{ margin: hp('2%'), marginTop: hp('4.5%'), marginLeft: hp('-13%'), height: hp('13%'), width: wp('60%') }}>
              <Text style={{ fontSize: hp('2%'), fontStyle: 'italic' }}>The COVID-19 infection rarely seems to cause a sore throat (this symptom have been observed in only about 5% of patients). Sore throat, are most often sign of a cold.</Text>
            </View>


          </View>



        </View>

      </ScrollView>


    );
  }
}