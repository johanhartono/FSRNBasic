import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IllustrationMyApp from './svgimage.svg';

export default function ReactNativeSvg() {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>
                Materi Menggunakan File SVG didalam React Native
            </Text>
            <IllustrationMyApp/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {padding: 20},
    textTitle: { textAlign: 'center'},
})
