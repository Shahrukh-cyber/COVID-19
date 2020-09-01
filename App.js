import * as React from 'react';
import { View, Text, TouchableHighlight, Image, ScrollView,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Slider from './AppScreens/Slider';
import Live from './AppScreens/Live';
import Recipe from './HomeScreens/Recipe';
import Crafts from './HomeScreens/Crafts';
import HomeSlider from './HomeSlider';
import {WebView} from 'react-native-webview';
import Artpaint from './HomeScreens/Artpaint';
import Photography from './HomeScreens/PhotoGraphy';
import Games from './HomeScreens/Games';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, listenOrientationChange as loc, removeOrientationListener as rol } from 'react-native-responsive-screen';
import CovidHome from './CovidHome';
import Preventions from './HomeScreens/Preventions';
import Corona from './HomeScreens/Corona';
import Unorderedlist from 'react-native-unordered-list';
import Screen from './Screen'




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
const COVID = ({ navigation }) => {

return (
  


<ScrollView>
<CovidHome/>
    <View>
      <View style={{ marginBottom:hp('3%') }}>
        <Slider />


      </View>
      
      <View style={{height: hp('60%'), width: wp('100%')}}>

<View style={{ flexDirection: 'row'}}>
  <TouchableHighlight onPress={() => navigation.navigate('Symptoms')}>
    <View style={{ width: wp('29.5%'), height: hp('16%'),margin:hp('1%')}}>


      <Image source={require('C:/Users/SHAHRUKH/COVID/Images/symptoms.png')} style={{ justifyContent: 'center', width: wp('20%'), height: hp('12%'),marginLeft:hp('2.5%') }} />
      <Text style={{ fontSize: hp('2%'), fontStyle: 'italic',marginLeft:hp('2.5%'),marginTop:hp('1%') }}>
        Sympotoms
</Text>
    </View>

  </TouchableHighlight>

  <TouchableHighlight onPress={() => navigation.navigate('Prevent')}>
    <View style={{ width: wp('29.5%'), height: hp('16%'),margin:hp('1%')}}>


      
    <Image source={require('C:/Users/SHAHRUKH/COVID/Images/Prevent.png')} style={{ justifyContent: 'center', width: wp('20%'), height: hp('12%'),marginLeft:hp('2.5%') }} />
      <Text style={{ fontSize: hp('2%'), fontStyle: 'italic',marginLeft:hp('3.5%'),marginTop:hp('1%') }}>
        Preventions
</Text>
    </View>



  </TouchableHighlight>
  <TouchableHighlight onPress={() => navigation.navigate('Coronavirus')}>
    <View style={{ width: wp('29%'), height: hp('16%'),margin:hp('1%') }}>


      
    <Image source={require('C:/Users/SHAHRUKH/COVID/Images/coronavirus.png')} style={{ justifyContent: 'center', width: wp('20%'), height: hp('12%'),marginLeft:hp('2.5%') }} />
      <Text style={{ fontSize: hp('2%'), fontStyle: 'italic',marginLeft:hp('2.5%'),marginTop:hp('1%') }}>
        Corona Virus
</Text>
    </View>





  </TouchableHighlight>



</View>
<View style={{ flexDirection: 'row'}}>
  <TouchableHighlight onPress={() => navigation.navigate('Incubation')}>
    <View style={{ width: wp('29.5%'), height: hp('16%'),margin:hp('1%') }}>


    <Image source={require('C:/Users/SHAHRUKH/COVID/Images/Incubation.png')} style={{ justifyContent: 'center', width: wp('20%'), height: hp('12%'),marginLeft:hp('2%') }} />
      <Text style={{ fontSize: hp('2%'), fontStyle: 'italic',marginLeft:hp('2.5%'),marginTop:hp('1%') }}>

        Incubation
</Text>
    </View>


  </TouchableHighlight>

  <TouchableHighlight onPress={() => navigation.navigate('TestCenters')}>
    <View style={{ width: wp('29.5%'), height: hp('16%'),margin:hp('1%') }}>


    <Image source={require('C:/Users/SHAHRUKH/COVID/Images/TestCenters.png')} style={{ justifyContent: 'center', width: wp('20%'), height: hp('12%'),marginLeft:hp('2.5%') }} />
      <Text style={{ fontSize: hp('2%'), fontStyle: 'italic',marginLeft:hp('1.5%'),marginTop:hp('1%') }}>


      
        Testing Centers
</Text>
    </View>


  </TouchableHighlight>
  <TouchableHighlight onPress={() => navigation.navigate('GetHelp')}>
    <View style={{width: wp('29.5%'), height: hp('16%'),margin:hp('1%') }}>


    <Image source={require('C:/Users/SHAHRUKH/COVID/Images/GetHelp.png')} style={{ justifyContent: 'center', width: wp('20%'), height: hp('12%'),marginLeft:hp('2.5%') }} />
      <Text style={{ fontSize: hp('2%'), fontStyle: 'italic',marginLeft:hp('3.5%'),marginTop:hp('1%') }}>




        Get Help
</Text>
    </View>
  </TouchableHighlight>



</View>
<View style={{ flexDirection: 'row'}}>
  <TouchableHighlight onPress={() => navigation.navigate('HomeActivities')}>
    <View style={{width: wp('29.5%'), height: hp('16%'),margin:hp('1%') }}>

    <Image source={require('C:/Users/SHAHRUKH/COVID/Images/HomeActivity.png')} style={{ justifyContent: 'center', width: wp('20%'), height: hp('12%'),marginLeft:hp('2.5%') }} />
      <Text style={{ fontSize: hp('2%'), fontStyle: 'italic',marginLeft:hp('1.5%'),marginTop:hp('1%') }}>



        Home Activities
</Text>
    </View>


  </TouchableHighlight>

  <TouchableHighlight onPress={() => navigation.navigate('Liveupdate')}>
    <View style={{width: wp('29.5%'), height: hp('16%'),margin:hp('1%') }}>


    <Image source={require('C:/Users/SHAHRUKH/COVID/Images/Liveupdate.png')} style={{ justifyContent: 'center', width: wp('20%'), height: hp('12%'),marginLeft:hp('2.5%') }} />
      <Text style={{ fontSize: hp('2%'), fontStyle: 'italic',marginLeft:hp('3%'),marginTop:hp('1%') }}>

    Live Update
</Text>
    </View>

  </TouchableHighlight>

  <TouchableHighlight onPress={() => navigation.navigate('Ehsas')}>
    <View style={{ width: wp('29.5%'), height: hp('16%'),margin:hp('1%')}}>


    <Image source={require('C:/Users/SHAHRUKH/COVID/Images/Ehsas.jpg')} style={{ justifyContent: 'center', width: wp('20%'), height: hp('12%'),marginLeft:hp('1%') }} />
      <Text style={{ fontSize: hp('2%'), fontStyle: 'italic',marginLeft:hp('4.5%'),marginTop:hp('1%') }}>



        Ehsas
</Text>
    </View>

  </TouchableHighlight>




</View>


</View>

      </View>
</ScrollView>
    
  );
}



const Symptoms = ({ navigation }) => {
  return (

<ScrollView>
        <View style={styles.mainContainer}>
        <View style={{backgroundColor:'white'}}>
        <View style={{backgroundColor:'lightgrey',height:hp('5%'),width:wp('82%'),marginLeft:hp('2%'),borderRadius:hp('3%'),margin:hp('2%')}}>
  <Text style={{margin:hp('1%'),fontSize: hp('1.9%'), fontStyle: 'italic'}}> Do you think you have Covid-19 ?</Text>
  <View style={{backgroundColor:'#00efee',height:hp('3.5%'),width:wp('20%'),borderRadius:hp('3%'),margin:hp('1%'),marginLeft:hp('30%'),marginTop:hp('-3.5%')}}>
  <TouchableHighlight onPress={() => navigation.navigate('Screening')}>
    <Text style={{ fontSize: hp('1.2%'), fontStyle: 'italic',margin:hp('1%')}}>Check Now</Text>
    </TouchableHighlight> 
 
  </View>
  </View>
</View>








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
const Prevent = ({ navigation }) => {
  return (
    
<Preventions/>
 
  );

}

const Coronavirus = ({ navigation }) => {
  return (
    

<Corona/>
    
    
  );

}

const Incubation = ({ navigation }) => {
  return (
    <ScrollView>
    <View style={{ margin:hp('1%')}}>

<Text style={{fontSize:hp('3%')}}>COVID-19 Incubation Period</Text>
<Text></Text>
<Text>The incubation period (time from exposure to the development of symptoms) of the virus is estimated to be between 2 and 14 days based on the following sources:</Text>
<Text></Text>
<Unorderedlist><Text >The World Health Organization (WHO) reported an incubation period for COVID-19 between 2 and 10 days. [1]</Text></Unorderedlist>
<Text></Text>
<Unorderedlist><Text>China’s National Health Commission (NHC) had initially estimated an incubation period from 10 to 14 days [2].</Text></Unorderedlist>
<Text></Text>
<Unorderedlist><Text>The United States' CDC estimates the incubation period for COVID-19 to be between 2 and 14 days [3].</Text></Unorderedlist>
<Text></Text>
<Unorderedlist><Text>DXY.cn, a leading Chinese online community for physicians and health care professionals, is reporting an incubation period of "3 to 7 days, up to 14 days".</Text></Unorderedlist>
<Text></Text>
<Text>The estimated range will be most likely narrowed down as more data becomes available.</Text>
<Text></Text>
<Image source={require('C:/Users/SHAHRUKH/COVID/Images/Coviddetail.jpg')} style={{justifyContent: 'center', width: wp('95%'), height: hp('28%')}}/>

<Text></Text>
<Text style={{fontSize:hp('3%')}}>Incubation period of up to 24 days?</Text>
<Text></Text>
<Text>The incubation period has been found to be as long as 24 days (range: 0-24 days; median: 3.0 days) in a study published on February 9. [11]</Text>
<Text></Text>
<Text>The WHO said in a press conference on February 10 that:</Text>
<Text></Text>
<Unorderedlist><Text>a very long incubation period could reflect a double exposure.</Text></Unorderedlist>
<Text></Text>
<Unorderedlist><Text>24 days represented an outlier observation that must be taken into consideration in the context of the main finding of the study.</Text></Unorderedlist>
<Text></Text>
<Unorderedlist><Text>WHO is not considering changing recommendations regarding incubation periods.</Text></Unorderedlist>
<Text></Text>
<Text>More recently, however, a case with an incubation period of 19 days was observed in a JAMA study published on Feb. 21. [13], and another case with an incubation period of 27 days was reported by Hubei Province on Feb. 22 [12]</Text>
<Text></Text>

<Text style={{fontSize:hp('3%')}}>Incubation period of 5.2 days on average</Text>
<Text></Text>
<Text>A Chinese study published in the New England Journal of Medicine on Jan. 30[7], has found the incubation period to be <Text style={{fontWeight:'bold',fontSize:hp('2%')}}>5.2 days on average</Text>, but it varies greatly among patients. The Chinese team conducting the study said their findings 
support a <Text style={{fontWeight:'bold',fontSize:hp('2%')}}>14-day medical observation period</Text> for people exposed to the pathogen.</Text>
<Text></Text>
<Text></Text>

    </View>
    </ScrollView>
  );

}
const TestCenters = ({ navigation }) => {
  return (

<ScrollView>
    <View style={{margin:hp('2%')}}>
<Unorderedlist bulletUnicode={0x2023} style={{fontSize:hp('3%')}}><Text style={{fontSize:hp('3%')}}> List of Testing Centers in Pakistan</Text>
<Text></Text>
                <Unorderedlist bulletUnicode={0x29BF} style={{marginLeft:hp('-2%')}}><Text style={{color:'#4DC9B0',fontWeight:'bold',fontSize:hp('2%')}}>In Karachi</Text></Unorderedlist>
                <Text></Text>
                <Unorderedlist bulletUnicode={0x29BE}><Text>Aga Khan University Hospital</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BE}><Text>Dow Medical College</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BE}><Text>Indus Hospital</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BE}><Text>Ojha Institute</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BE}><Text>Civil Hospital</Text></Unorderedlist>

                <Text></Text>
                <Unorderedlist bulletUnicode={0x29BF} style={{marginLeft:hp('-2%')}}><Text style={{color:'#4DC9B0',fontWeight:'bold',fontSize:hp('2%')}}>In Lahore</Text></Unorderedlist>
                <Text></Text>
                <Unorderedlist bulletUnicode={0x29BE}><Text>Punjab AIDS Lab</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BE}><Text>Shaukat Khanum Memorial Cancer Hospital</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BE}><Text>Services Hospital</Text></Unorderedlist>
                
                <Text></Text>
                <Unorderedlist bulletUnicode={0x29BF} style={{marginLeft:hp('-2%')}}><Text style={{color:'#4DC9B0',fontWeight:'bold',fontSize:hp('2%')}}>In Islamabad</Text></Unorderedlist>
                <Text></Text>
                <Unorderedlist bulletUnicode={0x29BE}><Text>Pakistan Institute of Medical Sciences (PIMS)</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BE}><Text>National Institue of Health (NIH)</Text></Unorderedlist>
                


                <Text></Text>
                <Unorderedlist bulletUnicode={0x29BF} style={{marginLeft:hp('-2%')}}><Text style={{color:'#4DC9B0',fontWeight:'bold',fontSize:hp('2%')}}>In Rawalpindi</Text></Unorderedlist>
                <Text></Text>
                <Unorderedlist bulletUnicode={0x29BE}><Text>Benazir Bhutto Hospital, Rawalpindi</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BE}><Text>Armed Forces Institute of Pathology</Text></Unorderedlist>

                <Text></Text>
                <Unorderedlist bulletUnicode={0x29BF} style={{marginLeft:hp('-2%')}}><Text style={{color:'#4DC9B0',fontWeight:'bold',fontSize:hp('2%')}}>In Multan</Text></Unorderedlist>
                <Text></Text>
                <Unorderedlist bulletUnicode={0x29BE}><Text>Nishtar Medical College</Text></Unorderedlist>
                <Text></Text>
                <Unorderedlist bulletUnicode={0x29BF} style={{marginLeft:hp('-2%')}}><Text style={{color:'#4DC9B0',fontWeight:'bold',fontSize:hp('2%')}}>In Sialkot</Text></Unorderedlist>
                <Text></Text>
                <Unorderedlist bulletUnicode={0x29BE}><Text>Allama Iqbal Memorial Hospital</Text></Unorderedlist>
                <Text></Text>
                <Unorderedlist bulletUnicode={0x29BF} style={{marginLeft:hp('-2%')}}><Text style={{color:'#4DC9B0',fontWeight:'bold',fontSize:hp('2%')}}>In Faislabad</Text></Unorderedlist>
                <Text></Text>
                <Unorderedlist bulletUnicode={0x29BE}><Text>Allied Teaching Hospital</Text></Unorderedlist>
                 <Text></Text>
                <Unorderedlist bulletUnicode={0x29BF} style={{marginLeft:hp('-2%')}}><Text style={{color:'#4DC9B0',fontWeight:'bold',fontSize:hp('2%')}}>In Hyderabad</Text></Unorderedlist>
                <Text></Text>
                <Unorderedlist bulletUnicode={0x29BE}><Text>LUMS Hospital</Text></Unorderedlist>
                <Text></Text>
                <Unorderedlist bulletUnicode={0x29BF} style={{marginLeft:hp('-2%')}}><Text style={{color:'#4DC9B0',fontWeight:'bold',fontSize:hp('2%')}}>In Quetta</Text></Unorderedlist>
                <Text></Text>
                <Unorderedlist bulletUnicode={0x29BE}><Text>Fatima Jinnah General and Chest Hospital</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BE}><Text>Sheikh Zayed Hospital</Text></Unorderedlist>

                <Text></Text>
                <Unorderedlist bulletUnicode={0x29BF} style={{marginLeft:hp('-2%')}}><Text style={{color:'#4DC9B0',fontWeight:'bold',fontSize:hp('2%')}}>In Gawadar</Text></Unorderedlist>
                <Text></Text>
                <Unorderedlist bulletUnicode={0x29BE}><Text>DHQ Hospital</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BE}><Text>Red Crecent Hospital</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BE}><Text>GDA Hospital</Text></Unorderedlist>
                



                <Text></Text>
                <Unorderedlist bulletUnicode={0x29BF} style={{marginLeft:hp('-2%')}}><Text style={{color:'#4DC9B0',fontWeight:'bold',fontSize:hp('2%')}}>In Peshawar</Text></Unorderedlist>
                <Text></Text>
                <Unorderedlist bulletUnicode={0x29BE}><Text>DHQ Hospital</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BE}><Text>Red Crecent Hospital</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BE}><Text>GDA Hospital</Text></Unorderedlist>
                




            </Unorderedlist> 
            
            </View>
            </ScrollView>
            
             );}
const GetHelp = ({ navigation }) => {
  return (
    <ScrollView>
    <View style={{margin:hp('2%')}}>
<Unorderedlist bulletUnicode={0x2023} style={{fontSize:hp('3%')}}><Text style={{fontSize:hp('3%')}}>Emergency Numbers</Text>
<Text></Text>
<Text>Emergency hotline and numbers given below:</Text>
      <Text></Text>
                <Unorderedlist bulletUnicode={0x29BF} style={{marginLeft:hp('-2%')}}><Text style={{color:'#4DC9B0',fontWeight:'bold',fontSize:hp('2%')}}>Throughout Pakistan</Text></Unorderedlist>
                <Text></Text>
                <Unorderedlist bulletUnicode={0x29BF}><Text style={{color:'#4DC9B0',fontWeight:'bold',fontSize:hp('2%')}}>In Sindh</Text></Unorderedlist>
                <Text></Text>
                <Unorderedlist bulletUnicode={0x29BE}><Text>021-99204452</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BE}><Text>021-99206565</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BE}><Text>0316-0111712</Text></Unorderedlist>
              
                <Text></Text>
                <Unorderedlist bulletUnicode={0x29BF} style={{marginLeft:hp('-2%')}}><Text style={{color:'#4DC9B0',fontWeight:'bold',fontSize:hp('2%')}}>In KPK</Text></Unorderedlist>
                <Text></Text>
                <Unorderedlist bulletUnicode={0x29BE}><Text>If anyone suspects symptoms of the Corona Virus, the hotline established for KPK is 1700</Text></Unorderedlist>
                
                <Text></Text>
                <Unorderedlist bulletUnicode={0x29BF} style={{marginLeft:hp('-2%')}}><Text style={{color:'#4DC9B0',fontWeight:'bold',fontSize:hp('2%')}}>In Punjab</Text></Unorderedlist>
                <Text></Text>
                <Unorderedlist bulletUnicode={0x29BE}><Text>0310-1102229</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BE}><Text>042-99231669-70-73-74-75-76</Text></Unorderedlist>
                


                <Text></Text>
                <Unorderedlist bulletUnicode={0x29BF} style={{marginLeft:hp('-2%')}}><Text style={{color:'#4DC9B0',fontWeight:'bold',fontSize:hp('2%')}}>In Balochistan</Text></Unorderedlist>
                <Text></Text>
                <Unorderedlist bulletUnicode={0x29BE}><Text>081 9241133-22</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BE}><Text>081 9202080</Text></Unorderedlist>

                <Text></Text>
                <Unorderedlist bulletUnicode={0x29BF} style={{marginLeft:hp('-2%')}}><Text style={{color:'#4DC9B0',fontWeight:'bold',fontSize:hp('2%')}}>In Azad Kashmir</Text></Unorderedlist>
                <Text></Text>
                <Unorderedlist bulletUnicode={0x29BE}><Text>Residents of Gilgit Baltistan and Azad Kashmir can call the national health helpline established by Government of Pakistan on 1166</Text></Unorderedlist>
                <Text></Text>
            </Unorderedlist> 
            
            </View>
            </ScrollView>
  );

}
const Ehsas = ({ navigation }) => {
  return (
    <ScrollView>
    <View style={{margin:hp('3%')}}>
<Text style={{fontSize:hp('3%')}}>Ehsaas Emergency Cash Program 2020 – SMS service 8171 launched How to Apply full information</Text>
<Text></Text>
<Text>Rs12,000 to be given per family via the ‘Ehsaas Emergency Cash Programme. SMS service 8171 launched for deserving families to benefit from Ehsaas Emergency Cash Program.  Ehsaas Emergency Cash Program 2020 – SMS service 8171 launched How to Apply full information.</Text>
      <Text></Text>
                <Text>Just days after the Emergency Emergency Cash Program was announced, the federal government has begun to register regularly. Ehsaas Emergency Cash Program 2020. </Text>
                <Text></Text> 
                <Text>On Wednesday, Prime Minister Imran Khan launched an SMS service that will connect deserving families to the government’s database of Emergency Cash. Ehsaas Emergency Cash Program 2020</Text>
                <Text></Text>
                <Text>If you feel the need for emergency cash assistance or know someone in need,
                   send an Name space ID card number and Send it to 8171. The last date to send an SMS is April 19 at 12 midnight</Text>
                <Text></Text>
                <Image source={require('C:/Users/SHAHRUKH/COVID/Images/sms.png')} style={{justifyContent: 'center', width: wp('50%'), height: hp('70%'),marginLeft:hp('10%')}}/>

                <Text></Text>
                <Text>If you have received the Emergency Cash SMS that you will be notified about eligibility after data check, please wait for another SMS from us with in next ten days.</Text>


            
            </View>
            </ScrollView>
  );

}


const HomeActivities = ({ navigation }) => {
  return (
<ScrollView>
    <View >
      <View style={{ marginBottom:hp('4%') }}>


        <HomeSlider />
      </View>



      <View style={{height: hp('60%'), width: wp('100%') }}>
        <View style={{ flexDirection: 'row' }}>

          <TouchableHighlight onPress={() => navigation.navigate('Recipes')}>
            <View style={{ width: wp('29.5%'), height: hp('20%'),margin:hp('1%')}}>

              <Image source={require('C:/Users/SHAHRUKH/COVID/Images/Recipe.png')} style={{ justifyContent: 'center', width: wp('18%'), height: hp('12%'),marginLeft:hp('2%') }} />
              <Text style={{ fontSize: hp('2%'), fontStyle: 'italic',marginLeft:hp('1%'),marginTop:hp('1%') }}>
                Cooking Recipes
</Text>
            </View>

          </TouchableHighlight>



          <TouchableHighlight onPress={() => navigation.navigate('Craft')}>
                 <View style={{ width: wp('29.5%'), height: hp('20%'),margin:hp('1%')}}>
                     <Image source={require('C:/Users/SHAHRUKH/COVID/Images/Craft.png')} style={{ justifyContent: 'center', width: wp('22%'), height: hp('12%'),marginLeft:hp('2%') }} />
              <Text style={{ fontSize: hp('2%'), fontStyle: 'italic',marginLeft:hp('1%'),marginTop:hp('1%') }}>
                Craft Techniques
</Text>
            </View>

          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigation.navigate('Art')}>
          <View style={{ width: wp('29.5%'), height: hp('20%'),margin:hp('1%')}}>
                     <Image source={require('C:/Users/SHAHRUKH/COVID/Images/Artpaint.png')} style={{ justifyContent: 'center', width: wp('22%'), height: hp('12%'),marginLeft:hp('2.5%') }} />
              <Text style={{ fontSize: hp('2%'), fontStyle: 'italic',marginLeft:hp('1%'),marginTop:hp('1%') }}>
              Art and Painting
</Text>
            </View>
          
          </TouchableHighlight>



        </View>


        <View style={{ flexDirection: 'row' }}>

          <TouchableHighlight onPress={() => navigation.navigate('Photo')}>
          <View style={{ width: wp('29.5%'), height: hp('20%'),margin:hp('1%')}}>
                     <Image source={require('C:/Users/SHAHRUKH/COVID/Images/PhotoGraphy.png')} style={{ justifyContent: 'center', width: wp('18%'), height: hp('12%'),marginLeft:hp('2.5%') }} />
              <Text style={{ fontSize: hp('1.85%'), fontStyle: 'italic',marginLeft:hp('1%'),marginTop:hp('1%') }}>
              PhotoGraphy Tips
</Text>
            </View>
          
          </TouchableHighlight>



          <TouchableHighlight onPress={() => navigation.navigate('HomeGames')}>
        
        
        
        
        
               <View style={{ width: wp('29.5%'), height: hp('20%'),margin:hp('1%')}}>
                     <Image source={require('C:/Users/SHAHRUKH/COVID/Images/game.png')} style={{ justifyContent: 'center', width: wp('18%'), height: hp('12%'),marginLeft:hp('1%') }} />
              <Text style={{ fontSize: hp('2%'), fontStyle: 'italic',marginLeft:hp('2.5%'),marginTop:hp('1%') }}>
              Games
</Text>
            </View>

          </TouchableHighlight>
        </View>
      </View>
    </View>
    </ScrollView>
  );

}
const Liveupdate = ({ navigation }) => {
  return (

    <Live />

  );

}
const Recipes = ({ navigation }) => { return (<Recipe />); }
const Craft = ({ navigation }) => { return (<Crafts />); }
const Art = ({ navigation }) => { return (<Artpaint />); }
const Photo = ({ navigation }) => { return (<Photography />); }
const HomeGames = ({ navigation }) => { return (<Games />); }
const Screening = ({ navigation }) => { return (
<Screen/>  


  ); }






const Stack = createStackNavigator();

export default function App() {



  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="COVID" component={COVID} options={{ headerTitleAlign: 'center', title: "COVID", headerStyle: { backgroundColor: '#00efee' } }} />
        <Stack.Screen name="Symptoms" component={Symptoms} options={{ title: "Symptoms", headerStyle: { backgroundColor: '#00efee' } }} />
        <Stack.Screen name="Prevent" component={Prevent} options={{ title: "Preventions", headerStyle: { backgroundColor: '#00efee' } }} />
        <Stack.Screen name="Coronavirus" component={Coronavirus} options={{ title: "Corona virus", headerStyle: { backgroundColor: '#00efee' } }} />
        <Stack.Screen name="Incubation" component={Incubation} options={{ title: "Incubation", headerStyle: { backgroundColor: '#00efee' } }} />
        <Stack.Screen name="TestCenters" component={TestCenters} options={{ title: "Test Centers", headerStyle: { backgroundColor: '#00efee' } }} />
        <Stack.Screen name="GetHelp" component={GetHelp} options={{ title: "Get Help", headerStyle: { backgroundColor: '#00efee' } }} />
        <Stack.Screen name="HomeActivities" component={HomeActivities} options={{ title: "Home Activities", headerStyle: { backgroundColor: '#00efee' } }} />
        <Stack.Screen name="Liveupdate" component={Liveupdate} options={{ title: "Live update", headerStyle: { backgroundColor: '#00efee' } }} />
        <Stack.Screen name="Recipes" component={Recipes} options={{ title: "Cooking Recipe Tips", headerStyle: { backgroundColor: '#00efee' } }} />
        <Stack.Screen name="Craft" component={Craft} options={{ title: "Craft Technique Tips", headerStyle: { backgroundColor: '#00efee' } }} />
        <Stack.Screen name="Art" component={Art} options={{ title: "Art And Painting", headerStyle: { backgroundColor: '#00efee' } }} />
        <Stack.Screen name="Photo" component={Photo} options={{ title: "Photography Tips", headerStyle: { backgroundColor: '#00efee' } }} />
        <Stack.Screen name="HomeGames" component={HomeGames} options={{ title: "HomeGames", headerStyle: { backgroundColor: '#00efee' } }} />
        <Stack.Screen name="Ehsas" component={Ehsas} options={{ title: "Ehsas Program", headerStyle: { backgroundColor: '#00efee' } }} />
        <Stack.Screen name="Screening" component={Screening} options={{ title: "Self Screening", headerStyle: { backgroundColor: '#00efee' } }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




