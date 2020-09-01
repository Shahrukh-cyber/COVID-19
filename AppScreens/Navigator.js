import * as React from 'react';
import { View, Text,TouchableHighlight ,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const COVID= ({ navigation })=> {
  return(



    <View>
<View style={{marginBottom:50,marginTop:5}}>



</View>
<View>
<View style={{flexDirection:'row',margin:5}}>
    <TouchableHighlight onPress={()=> navigation.navigate('Symptoms')}>
    <View style={{marginLeft:15}}>  
    

  <Image source={require('C:/Users/SHAHRUKH/COVID/Images/symptoms.png')} style={{justifyContent:'center',width:70,height:70,margin:10,marginLeft:20}}/>
  <Text style={{marginTop:5,marginLeft:10,fontSize:15,fontStyle:'italic'}}>
Sympotoms
</Text>
</View>

</TouchableHighlight>

<TouchableHighlight onPress={()=> navigation.navigate('Prevent')}>
    <View style={{marginLeft:20}} >  
    

  <Image source={require('C:/Users/SHAHRUKH/COVID/Images/Prevent.png')} style={{justifyContent:'center',width:70,height:70,margin:10,marginLeft:15}}/>
  <Text style={{marginTop:5,marginLeft:15,fontSize:15,fontStyle:'italic'}}>
  Preventions
</Text>
</View>

</TouchableHighlight>
<TouchableHighlight onPress={()=> navigation.navigate('Coronavirus')}>
    <View style ={{marginLeft:15}}>  
    

  <Image source={require('C:/Users/SHAHRUKH/COVID/Images/coronavirus.png')} style={{justifyContent:'center',width:70,height:70,margin:10,marginLeft:15}}/>
  <Text style={{marginTop:5,marginLeft:15,fontSize:15,fontStyle:'italic'}}>
Corona Virus
</Text>
</View>

</TouchableHighlight>



</View>
<View style={{flexDirection:'row',margin:5}}>
<TouchableHighlight onPress={()=> navigation.navigate('Incubation')}>
    <View style ={{marginLeft:15}}>  
    

  <Image source={require('C:/Users/SHAHRUKH/COVID/Images/Incubation.png')} style={{justifyContent:'center',width:70,height:70,margin:10,marginLeft:15}}/>
  <Text style={{marginTop:5,marginLeft:15,fontSize:15,fontStyle:'italic'}}>
Incubation
</Text>
</View>

</TouchableHighlight>

<TouchableHighlight onPress={()=> navigation.navigate('TestCenters')}>
    <View style ={{marginLeft:25}}>  
    

  <Image source={require('C:/Users/SHAHRUKH/COVID/Images/TestCenters.png')} style={{justifyContent:'center',width:70,height:70,margin:10,marginLeft:15}}/>
  <Text style={{marginTop:5,marginLeft:15,fontSize:15,fontStyle:'italic'}}>
Test Centers
</Text>
</View>

</TouchableHighlight>
<TouchableHighlight onPress={()=> navigation.navigate('GetHelp')}>
    <View style ={{marginLeft:25}} >  
    

  <Image source={require('C:/Users/SHAHRUKH/COVID/Images/GetHelp.png')} style={{justifyContent:'center',width:70,height:70,margin:10,marginLeft:15}}/>
  <Text style={{marginTop:5,marginLeft:25,fontSize:15,fontStyle:'italic'}}>
Get Help
</Text>
</View>

</TouchableHighlight>



</View>

<View style={{flexDirection:'row',margin:5}}>
<TouchableHighlight onPress={()=> navigation.navigate('HomeActivities')}>
    <View style ={{marginLeft:15}}>  
    

  <Image source={require('C:/Users/SHAHRUKH/COVID/Images/HomeActivity.png')} style={{justifyContent:'center',width:70,height:70,margin:10,marginLeft:15}}/>
  <Text style={{marginTop:5,marginLeft:10,fontSize:15,fontStyle:'italic'}}>
Home Activities
</Text>
</View>

</TouchableHighlight>

<TouchableHighlight onPress={()=> navigation.navigate('Liveupdate')}>
    <View style ={{marginLeft:25}}>  


  <Image source={require('C:/Users/SHAHRUKH/COVID/Images/Liveupdate.png')} style={{justifyContent:'center',width:70,height:70,margin:10,marginLeft:8}}/>
  <Text style={{marginTop:2,marginLeft:15,fontSize:15,fontStyle:'italic'}}>
  Live Update
</Text>
</View>

</TouchableHighlight>




</View>




</View>
    </View>
  );
}



const Symptoms=({navigation})=> {
return(
  <View style={{marginBottom:150}}>
</View>  
);

}
const Prevent=({navigation})=> {
  return(
    <View style={{marginBottom:150}}>
    
  </View>  
  );
  
  }
  
const Coronavirus=({navigation})=> {
  return(
    <View style={{marginBottom:150}}>
    
  </View>  
  );
  
  }
  
const Incubation=({navigation})=> {
  return(
    <View style={{marginBottom:150}}>
    
  </View>  
  );
  
  }
  const TestCenters=({navigation})=> {
    return(
      <View style={{marginBottom:150}}>
      
    </View>  
    );
    
    }
    const GetHelp=({navigation})=> {
      return(
        <View style={{marginBottom:150}}>
        
      </View>  
      );
      
      }
      const HomeActivities=({navigation})=> {
        return(
          <View style={{marginBottom:150}}>
          
        </View>  
        );
        
        }
        const Liveupdate=({navigation})=> {
          return(
            <View style={{marginBottom:150}}>
            
          </View>  
          );
          
          }
  
const Stack = createStackNavigator();

export default function Navigator() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="COVID" component={COVID} options={{headerTitleAlign:'center',title:"COVID" }}/>
        <Stack.Screen name="Symptoms" component={Symptoms} options={{title:"Symptoms"}}/>   
        <Stack.Screen name="Prevent" component={Prevent} options={{title:"Preventions"}}/>   
        <Stack.Screen name="Coronavirus" component={Coronavirus} options={{title:"Corona virus"}}/>      
        <Stack.Screen name="Incubation" component={Incubation} options={{title:"Incubation"}}/>      
        <Stack.Screen name="TestCenters" component={TestCenters} options={{title:"Test Centers"}}/>      
        <Stack.Screen name="HomeActivities" component={HomeActivities} options={{title:"Home Activities"}}/>      
        <Stack.Screen name="Liveupdate" component={Liveupdate} options={{title:"Live update"}}/>      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
