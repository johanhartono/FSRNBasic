import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
} from 'react-native';



const SampleComponent = () => {
    return (
      <View>
      <View style={{ width: 80, height: 80, backgroundColor: 'red'}}></View>
        <Text>Johan</Text>
        <Hartono/>
        <Photo></Photo>
        <TextInput style={{borderWidth: 1}}></TextInput>
        <BoxGreen />
        <Profile />
    </View>
    )
  }
  const Hartono = () => {
    return <Text>Hartono</Text>
  
  };
  
  const Photo = () => {
    return ( <Image source={{uri: 'http://placeimg.com/640/480/any'}}
    style={{width: 100, height: 100}}></Image>
    
    )
  }
  
  class BoxGreen extends Component {
    render () {
      return <Text>Ini Component dari class</Text>
    }
  }
  
  class Profile extends Component {
    render () {
      return ( 
      <View>
        <Image source={{uri: 'http://placeimg.com/640/480/any'}}
        style={{width: 100, height: 100}}></Image>
        <Text>Ini adalah Gedung</Text>
      </View>
      )
    }  
  }
  export default SampleComponent;