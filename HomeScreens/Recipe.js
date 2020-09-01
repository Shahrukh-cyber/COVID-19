import React, {useEffect,useState } from 'react'
import { Text,SafeAreaView, View} from 'react-native'
import NetInfo from '@react-native-community/netinfo';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, listenOrientationChange as loc, removeOrientationListener as rol } from 'react-native-responsive-screen';
import {WebView} from 'react-native-webview';
 const Reacipe=({}) =>{
  const [isInternetReachable,setIsInternetReachable] = useState(false)
useEffect(() => {
  const unsubscribe = NetInfo.addEventListener(state=> {

setIsInternetReachable(state.isInternetReachable); 

  });
  return () => {
    unsubscribe();
  }
}, []) 
if(!isInternetReachable){
  return <SafeAreaView style={{backgroundColor:'red'}}>
 <Text style={{
   color:'white',
 fontSize:16,
 padding:2,
 textAlign:'center',
 fontWeight:'500',
 letterSpacing:2,
 }}>No Connection</Text>
</SafeAreaView>

}

    return (
      

<WebView

source={{uri: 'https://www.youtube.com/channel/UCuqBZWK9Wrol_4Y22DzisFQ/playlists'}}
style={{marginTop:-50}}


/>








     )
  }
 


 export default Reacipe;




 
 