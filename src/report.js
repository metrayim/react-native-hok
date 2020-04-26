// import React from 'react'
// import {View, Text} from 'react-native'
// import {getReportDuring } from './global'
// import DatePicker from 'react-native-datepicker'
// export  const Report = () => {
//     const myDate = new Date()
//     const start = myDate.toISOString().split('T')[0]

//     const result = getReportDuring(start , start)

//     result.then(data => {
//         console.log(data)
//     }).catch(err=> {
//         console.log(err)
//     })
//     return (
//         <View>
//             <Text>workk</Text>
//         </View>
//     )
// }
// import React, { useState } from 'react';
// import { View, Button, Platform, SafeAreaView, TouchableOpacity, Text, StyleSheet } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';



import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList, TouchableOpacity, } from 'react-native';
import DatePicker from 'react-native-datepicker'

export default class report extends Component {
  state = {
    startDate: null,
    endDate: null,
    data: [
      {
        id: 1,
        name: 'car',
        amount: 100,
      },
      {
        id: 2,
        name: 'Car',
        amount: 100,
      },
      {
        id: 3,
        name: 'Car',
        amount: 100,
      },
      {
        id: 4,
        name: 'Car',
        amount: 100,
      },

    ]
  }

  render() {
    return (
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <View>
          <Text style={{ fontSize: 50, height: 100, textAlign: "center", color: 'red' }}>Transaction</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <DatePicker
            style={{ width: 200 }}
            date={this.state.startDate}
            mode="date"
            placeholder="Start Date"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            maxDate="2016-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => { this.setState({ startDate: date }) }}
          />
          <DatePicker
            style={{ width: 200 }}
            date={this.state.endDate}
            mode="date"
            placeholder="End Date"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            maxDate="2016-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => { this.setState({ endDate: date }) }}
          />
        </View>
        <TouchableOpacity onPress={() => { alert('search') }} activeOpacity={0.7} style={styles.buttonSearch} >
          <Text style={styles.buttonText}> Search</Text>
        </TouchableOpacity>

        <View style={styles.tableContainer}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.textHeader}><Text style={styles.textStyle}>ID</Text></View>
            <View style={styles.textHeader}><Text style={styles.textStyle}>Name</Text></View>
            <View style={styles.textHeader}><Text style={styles.textStyle}>Amount</Text></View>
            <View style={styles.textHeader}><Text style={styles.textStyle}>Remove</Text></View>

          </View>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.textTable}><Text >{item.id}</Text></View>
                <View style={styles.textTable}><Text>{item.name}</Text></View>
                <View style={styles.textTable}><Text>{item.amount}</Text></View>
                <TouchableOpacity onPress={() => { alert('hello') }} activeOpacity={0.7} style={styles.button} >
                  <Text style={styles.buttonText}> Remove </Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>

    );
  }
}


const styles = StyleSheet.create({
  tableContainer: {
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 30

  },
  header: {
    fontSize: 50, height: 100, textAlign: "center", color: 'red'
  },
  button: {
    width: '20%',
    height: 30,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 13,
    backgroundColor: 'red'

  },
  buttonSearch:
  {
    width: '35%',
    height: 40,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 13,
    backgroundColor: 'green'

  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  textTable: {
    width: 100,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  textHeader: {
    width: 100,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  }

})