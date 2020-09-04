
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import macbook from '../../assets/image/macbook.jpg';

const StylingComponent = () => {
  return (
    <View>
        <Text style={styles.text}>Sytling Component</Text>
        <View
          style={styles.text}>
        </View>
        <View style={{padding:12, backgroundColor: '#F2F2F2', width: 212}}>
          <Image source={macbook} style={{width: 188, height:107, borderRadius:8}}/>
          <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16 }}>New MacBook Pro 2012</Text>
          <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 12 }}>Rp. 12.500.000</Text>
          <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12 }}>Jakarta Barat</Text>
              <View style={{
                backgroundColor:'blue',
                paddingVertical: 6,
                borderRadius: 25,
                marginTop: 20}}>
              <Text style={{
                fontSize: 14,
                fontWeight: '600',
                color: 'white',
                textAlign: 'center'
              }}>Beli</Text>
            </View>
        </View>
        
    </View>
  )
}
const styles = StyleSheet.create({
  text: {
    width: 100,
    height: 100,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10ac84',
    backgroundColor: '#0abde3',
    borderWidth: 2,
    borderColor: '#5f27cd',
    marginTop: 20,
    marginLeft: 20,
  },
});

 export default StylingComponent;