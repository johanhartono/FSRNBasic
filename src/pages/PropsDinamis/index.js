import React from 'react'
import { StyleSheet, Text, View , Image, ScrollView} from 'react-native'

const Story = (props) => {
    return (
        <View style = {{alignItems: 'center', marginRight: 20}}>
        <Image 
        source={{
            uri: props.gambar,
            }}
        style={{width: 70, height: 70, borderRadius: 50 /2 }}
        />
        <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.judul}</Text>
    </View>       
    )
}
const PropsDinamis = () => {

    return (
        <View>
            <Text>Materi Component Dinamis dengan Props</Text>
            <ScrollView horizontal>
                <View style={{flexDirection: 'row'}}>
                <Story judul = "YouTube Channel" gambar = 'http://placeimg.com/640/480/any'/>
                <Story judul = "Kelas Online 1" gambar = 'http://placeimg.com/640/480/any'/>
                <Story judul = "Kelas Online 2" gambar = 'http://placeimg.com/640/480/any'/>
                <Story judul = "Kelas Online 3" gambar = 'http://placeimg.com/640/480/any'/>
                <Story judul = "Kelas Online 4" gambar = 'http://placeimg.com/640/480/any'/>
                <Story judul = "Kelas Online 5" gambar = 'http://placeimg.com/640/480/any'/>
                <Story judul = "Kelas Online 6" gambar = 'http://placeimg.com/640/480/any'/>
                <Story judul = "Kelas Online 7" gambar = 'http://placeimg.com/640/480/any'/>
                <Story judul = "Kelas Online 8" gambar = 'http://placeimg.com/640/480/any'/>
                <Story judul = "Kelas Online 9" gambar = 'http://placeimg.com/640/480/any'/>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})

export default PropsDinamis;