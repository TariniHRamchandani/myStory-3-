import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Image} from 'react-native';
import { createAppContainer} from 'react-navigation'; 
import { createBottomTabNavigator } from 'react-navigation-tabs';

// You can import from local files
import writeStory from './Screens/writeStory';
import readStory from './Screens/readStory';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Appcontainer />
      </View>
    )
  }
}

var tabNavigator= createBottomTabNavigator({
  writeStory:{screen:writeStory},
  readStory:{screen:readStory}
},
{
  defaultNavigationOptions:({navigation})=>({
tabBarIcon:()=>{
  const routename=navigation.state.routeName
  if(routename==='writeStory'){
    return(
      <Image source={require('./assets/write.png')} style={{width:40,height:40}}></Image>      
    )
  }
  else if(routename==='readStory'){
    return(
      <Image source={require('./assets/read.png')} style={{width:40,height:40}}></Image>      
    )
  }
}
  })
})
const Appcontainer = createAppContainer(tabNavigator)
