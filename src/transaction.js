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
import {getAllCategoies} from './global'

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
    render() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                <ScrollView>
                    <View>
                        <Text style={{ fontSize: 50, height: 100, textAlign: "center", color: 'red' }}>Transaction</Text>
                    </View>
                    <FlatList
                        horizontal={true}
                        data={this.state.data}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={styles.container}>
                                <Text>
                                    {item.name}
                                </Text>
                                <View>
                                    <Image source={{ uri: item.image }} style={styles.images} />
                                    {/* <Image source={{uri: item.image}} style={styles.images}/> */}
                                </View>
                                <View>
                               
                                    <Text style={styles.wrageText}>
                                        {item.price+'$'}
                         </Text>
                                </View>
                                <View>
                                    <TextInput
                                        style={styles.textInputStyle1}
                                        placeholder="Prece"
                                    />
                                </View>
                                <TouchableOpacity onPress={() => { this.yourFunction() }} activeOpacity={0.7} style={styles.button} >
                                    <Text style={styles.buttonText}> Save</Text>
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
        borderRadius: 30
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
        fontSize: 20,
        
    },
})