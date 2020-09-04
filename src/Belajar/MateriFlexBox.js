import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
//import SampleComponent from './SampleComponent';
//import StylingReactNativeComponent from './StylingReactNativeComponent';

export default class MateriFlexBox extends Component {

    constructor (props) {
        super(props);
        console.log('Hello ==> constructor');
        this.state = {
            subscriber: 200,
        }
    }
     componentDidMount () {
        console.log('==> Component Did Mount');
        setTimeout(() => {
            this.setState( {
                subscriber: 400,
            });
        },2000);

    } 
    componentDidUpdate () {
        console.log('==> Component Did Update');
    } 
    componentWillUnmount () {
        console.log('==> Component will unmount');
    }
    render() 
    
    {
        console.log('==> render');

        return (
            <View>
                <View style={{
                    flexDirection: 'column', 
                    backgroundColor:'#c8d6e5',
                    alignItems:'center',
                    justifyContent: 'space-between',
                }}>
                    <View style={{backgroundColor:'blue', width: 50, height:50}}/>
                    <View style={{backgroundColor:'yellow', width: 50, height:    50}}/>
                    <View style={{backgroundColor:'red', width: 50, height:50}}/>
                    <View style={{backgroundColor:'green',  width: 50, height:50}}/>
                </View>

                <View style={{
                    flexDirection: 'row', 
                    justifyContent: 'space-around',
                }}>
                    <Text>Beranda</Text>
                    <Text>Video</Text>
                    <Text>PlayList</Text>
                    <Text>Komunitas</Text>
                    <Text>Channel</Text>
                    <Text>Tentang</Text>
                </View>
                <View style={{
                    flexDirection: 'row', 
                    alignItems: 'center',
                    marginTop: 20,
                }}>
                    <Image source={{uri: 'http://placeimg.com/640/480/any'}}
                    style={{width: 100, height: 100, borderRadius: 50 , marginRight: 24 }}></Image>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold'}}>Johan Hartono Ho</Text>
                            <Text>React Native Developer</Text>
                            <Text> {this.state.subscriber}  Subsrcibers</Text>
                        </View>
                </View>
            </View>
        );
    }
}