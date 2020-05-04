// import React from 'react'
// import {View ,Text} from 'react-native'
// import {getAllCategoies,sav} from './global'
// export const Transaction = () => {
//     const initState = () => {
//         const result = getAllCategoies();
//         console.log(`im wkring`)
//         result.then(data => {
//             console.log(data)
//         }).catch(err => {
//             console.log(err)
//         })
//     }
//     initState()
//     return (
//     <View>
//         <Text>beeee</Text>
//     </View>)
// }

import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {getAllCategoies,saveRecord} from './global'

export default class transaction extends Component {
    state = {
        
        data: [
            {
                id: 1,
            },
            {
                id: 2,
            },
            {
                id: 3,

            },
            {
                id: 4,
            },

        ]
    }
    componentWillMount(){
        const results = getAllCategoies()
        results.then(result => {
            console.log(result)
            this.setState({data : result})
        })
        
    }
    refreshCategory(){
        const results = getAllCategoies()
        results.then(result => {
            console.log(result)
            this.setState({data : result})
        })
    }
    yourFunction(object){
       
        console.log(object)
        const record = {
            category : {
               id: object.id , 
               price : object.price
            },
            service_amount : parseInt(object.amount == undefined ? "0" : object.amount),
        }

        const result =  saveRecord(record)
        /**
         * refresh redux
         */
        // result.then(data => {
        //     console.log(data)
        // }).catch(err => {
        //     console.log(err)
        // })
    }
    render() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                <ScrollView>
                    <View>
                        <TouchableOpacity onPress={() => { this.refreshCategory() }} activeOpacity={0.7}  >
                            <Text style={{ fontSize: 50, height: 100, textAlign: "center", color: '#393939' }}>Operation</Text>
                        </TouchableOpacity>   
                     </View>
                    <FlatList
                        horizontal={true}
                        data={this.state.data}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={styles.container}>
                               <View>
                                    <Text >
                                        {item.name}
                                       
                                    </Text>
                                    
                               </View>
                                <View>
                                    <Image source={{ uri: item.image }} style={styles.images} />
                                    {/* <Image source={{uri: item.image}} style={styles.images}/> */}
                                </View>
                                <View>
                               
                                <Text >
                                        {item.price+'$'}
                                    </Text> 
                                </View>
                                <View>
                                
                                    <TextInput
                                        style={styles.textInputStyle1}
                                        onChangeText={val => {item.amount = val}}
                                    />
                                </View>
                                <TouchableOpacity onPress={() => { this.yourFunction({id : item.id, price : item.price,amount : item.amount}) }} activeOpacity={0.7} style={styles.button} >
                                    <Text style={styles.buttonText}> Push</Text>
                                </TouchableOpacity>

                            </View>

                        )}
                        keyExtractor={item => item.id}
                    />
                </ScrollView>

            </View>

        );
    }
}


const styles = StyleSheet.create({

    container: {
        width: 370,
        height: 550,
        borderRadius: 30,
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 20,
        marginLeft: 20,
        backgroundColor :'#fff'

    },
    images: {
        width: 368,
        height: 350,
        // borderRadius: 30
    },
    button: {
        width: '30%',
        height: 40,
        backgroundColor: '#4CAF50',
        borderRadius: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20

    },
    textInputStyle1: {
        height: 60,
        width: 200,
        borderColor: '#028b53',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 20,
        backgroundColor: '#ededed',
        borderRadius: 100

    },
    wrageText: {
        textAlign: 'center',
        fontSize: 30
    },
    buttonText: {
        color: '#ededed',
        textAlign: 'center',
        fontSize: 15,
        
    },
    buttonText1: {
        // color: '#ededed',
         textAlign: 'center',
        fontSize: 20,
        
    }
})