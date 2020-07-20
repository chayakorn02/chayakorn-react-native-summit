import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import Colors from '../../constants/Colors'
import Tab from './tab'
import { color } from 'react-native-reanimated';

class Tabs extends React.Component{

    render () {
        const{ selected,select } = this.props

        return (
            <View style={styles.container}>
                <Tab onPress={() => select('All')} selected={selected === 'All'}>All</Tab>
                <Tab onPress={() => select('Friday')} selected={selected === 'Friday'}>Friday</Tab>
                <Tab onPress={() => select('Saturday')} selected={selected === 'Saturday'}>Saturday</Tab>
                <Tab onPress={() => select('Sunday')} selected={selected === 'Sunday'}>Sunday</Tab>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      height: 35,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderBottomColor: Colors.accent,
      flexDirection: "row"
    }
      
})

export default Tabs;