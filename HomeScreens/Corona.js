import React, { Component } from 'react'
import { Text, View,ScrollView,Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp, listenOrientationChange as loc, removeOrientationListener as rol } from 'react-native-responsive-screen';

export default class Corona extends Component {
    render() {
        return (
            <ScrollView>
            <View style={{backgroundColor:'#363637'}}>
                <Text style={{margin:hp('2%'),fontStyle:'italic',color:'white',fontSize:hp('2%')}}> Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</Text>
<Image source={require('C:/Users/SHAHRUKH/COVID/Images/Coviddetail.jpg')} style={{justifyContent: 'center', width: wp('100%'), height: hp('28%'),marginLeft:hp('0')}}/>
           <Text style={{margin:hp('2%'),fontStyle:'italic',color:'white',fontSize:hp('2%')}}>Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.</Text>     
           <Text style={{margin:hp('2%'),fontStyle:'italic',color:'white',fontSize:hp('2%')}}>The best way to prevent and slow down transmission is be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face. </Text>
           <Text style={{margin:hp('2%'),fontStyle:'italic',color:'white',fontSize:hp('2%')}}>The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).</Text>
            <Text style={{margin:hp('2%'),fontStyle:'italic',color:'white',fontSize:hp('2%')}}>At this time, there are no specific vaccines or treatments for COVID-19. However, there are many ongoing clinical trials evaluating potential treatments. WHO will continue to provide updated information as soon as clinical findings become available.</Text>
            </View>
            </ScrollView>
        )
    }
}
