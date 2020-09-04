import React, { Component, useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
//import SampleComponent from './SampleComponent';
//import StylingReactNativeComponent from './StylingReactNativeComponent';
//functional components alias hooks

/* export default class FlexBox extends Component {

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
                    flexDirection: 'row', 
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
} */

const FlexBox = () => {
    const [subscriber, setSubsriber] = useState (200);
    useEffect(() => {
        console.log('did mount');
        setTimeout( () => {
            setSubsriber(400);
        },2000);
        return () => {
            console.log('did update');
        }
    }, [subscriber]);

/*     useEffect(() => {
        console.log('did update');
        setTimeout( () => {
            setSubsriber(400);
        },2000);
    }, [subscriber]); */

    return (
        <View>
            <View style={{
                flexDirection: 'row', 
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
                        <Text>{subscriber} Subsrcibers</Text>
                        {/* <Text> {this.state.subscriber}  Subsrcibers</Text> */}
                    </View>
            </View>
        </View>
    );
}

export default FlexBox;