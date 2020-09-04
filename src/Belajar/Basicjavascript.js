// Object Oriented Programming

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Basicjavascript() {
    // primitive
    const nama = 'Johan Hartono Ho'; // String
    let usia = 24; // Number
    const apakahLakiLaki = true; // Boolean
    // Complex
    const hewanPeliharaan = {
        nama: 'Miaw',
        jenis: 'Kucing',
        apakahHewanLokal: true,
        warna: 'Kuning',
        orangTua: {
            jantan: 'Kaisar',
            betina: 'kuin,'
        }
    }
    // Object
    const sapaOrang = (name,age) => {
        return console.log('Hello ${name} usia anda ${age}'); // Hello Johan Hartono Ho
    };    // Function

    sapaOrang('Johan',24);
    const namaOrang = ['Johan','Linda','Jolin']; // Object - array
    typeof namaOrang; // Object


    const sapaHewan = objectHewan => {
        let hasilSapa = '';
    //
/*     if (objectHewan.nama == 'Miaw') {
        hasilSapa ='Helllo Miaw';
    } else {
        hasilSapa = 'Hewan Siapa ini?';
    }
    } */
    return objectHewan.nama === 'Miaw'
    ? ' Halo Miaw, apa kabar?'
    : ' Ini hewan siapa?';
}
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Materi Basic Javascript di React Native </Text>
            <Text style={styles.textTitle}>Name: {nama} </Text>
            <Text style={styles.textTitle}>Age: {usia} </Text>
            <Text>{sapaHewan(hewanPeliharaan)}</Text>
            {/*<Text>{namaOrang[0]}</Text>
            <Text>{namaOrang[1]}</Text>
            <Text>{namaOrang[2]}</Text> */}
            {namaOrang.map((orang) => <Text>{orang}</Text>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {padding: 20},
    textTitle: { textAlign: 'center'},
})
