import React from 'react'
import {View, Text, Image} from 'react-native'
import styles from './styles'


export default function Post() {
    return (
        <View style={styles.container}>
            <Image 
            style={styles.image} 
            source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'}} />
            <Text style={styles.bedrooms}>1 Bed 1 Badroom</Text>
            <Text style={styles.description} numberOfLines={2}>
                In the winter the cross-country skiing trail passes behind the property. 
                Ideally suited for relaxing or active holidays for two and also for family 
                vacation with or without ponies.
            </Text>
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>$36</Text>
                <Text style={styles.price}>  $30</Text>
                / night
            </Text>
            <Text style={styles.totalPrice}>
                $320 total
            </Text>
        </View>
    );
  }
