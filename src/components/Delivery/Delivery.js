import React from 'react';
import { View, Text, Card, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './DeliveryCss';


export default function DeliveryCart({ }) {
    return (
        <SafeAreaView style={styles.Container}>
            <View>
                <Icons name={"alarm"} size={24} />
            </View >
            <View >
                <Text style={styles.title}>Delivery Items In 11 Minutes.</Text>
                <Text>3 Items</Text>
            </View>
        </SafeAreaView>
    )
}

