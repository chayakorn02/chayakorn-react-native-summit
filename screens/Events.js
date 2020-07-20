import * as React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import Card from '../commponents/Card/index'
import mock from '../mock/index'
import Tab from '../commponents/Tab/index'
import 'react-native-gesture-handler';


class Events extends React.Component { 
  state = {
    selected : 'All'
  }

  select = selected => {
    this.setState({ selected })
  }
  render () {
    const {selected} = this.state

    return (
     <View style={styles.wrap}>
        <Tab selected={selected} select={this.select} />
        <FlatList
          data={mock.filter(m => m.date === selected || selected === 'All')}
          renderItem={({ item }) => <Card data={item} />}
          keyExtractor={item => item.id}
       />
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
  },
  wrap: {
    alignSelf: 'stretch'
  }
    
})

export default Events;