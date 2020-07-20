import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import {StyleSheet, View, Text } from 'react-native';

class Base extends React.Component{
    render () {
        return (
            <View style={styles.container}>
                <Text>Events</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }
      
})

export default Base;