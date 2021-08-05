import React from 'react'
import {View, Text, ImageBackground, Pressable} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'

import styles from './styles'


export default function HomeScreen() {
    return (
        <View>
            <Pressable style={styles.serachButton} onPress={() => console.warn('Explore Data Pressed')}>
                {/* <Entypo name='location-pin' size={25} color={color} /> */}
                <Fontisto name='search' size={25} color={'#f15454'} />
                <Text style={styles.searchButtonText}>
                    Where are you going
                </Text>
            </Pressable>
            <ImageBackground  source={require('../../../assets/images/wallpaper.jpg')} style={styles.image}>
                <Text style={styles.title}>Go Near</Text>
                <Pressable style={styles.button} onPress={() => console.warn('Explore Data Pressed')}>
                    <Text style={styles.buttonText}>Explore Nearby Stays</Text>
                </Pressable>
            </ImageBackground>
        </View>
    );
  }
