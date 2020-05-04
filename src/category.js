import React, { Component ,useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {uploadCategory } from './global'
class category extends Component {
  state = {
   name :'',
   price : '',
   image : ''
  }

  yourFunction = () => {
    const object = this.state;
    console.log(this.state)
      let category  = {
        name : object.name,
        image : object.image,
        price :  object.price ==  null ? 0 : parseFloat(object.price)
    }
    const result =  uploadCategory(category)

      
    result.then(_category =>{
        /**
         * _category property was set in uploadCategory
         */
            console.log(_category)
            this.setState({
              name :'',
              price : '',
              image : ''
            })
            // addNewCategory(_category)
        
        
    })
}
  options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
 

  
    // console.log(this.state.avatarSource, "this your image")
    // const { avatarSource } = this.state;
    // const image = avatarSource ? avatarSource : { uri: 'https://techcrunch.com/wp-content/uploads/2010/07/github-logo.png?w=512' }
  render(){
    return (
      <View>

          <View>
              <Text style={{ fontSize: 50, height: 100, textAlign: "center", color: '#393939' }}>Category</Text>
            </View>
            
          <View style={styles.category_container}>
            
            <View>
              <TextInput 
                style={styles.textInputStyle1}
                placeholder="Name"
                value={this.state.name}
                onChangeText={text => this.setState({name : text})}
              />
            </View>
            <View>
              <TextInput
                style={styles.textInputStyle1}
                placeholder="Price"
                value={this.state.price}
                onChangeText={text => this.setState({price : text})}
              />
            </View>
      
            <View>
              <TextInput 
              style={styles.textInputStyle1}
                placeholder="Image Url"
                value={this.state.image}
                onChangeText={text => this.setState({image : text})}
                />
            </View>
            
            <TouchableOpacity onPress={() => { this.yourFunction() }} activeOpacity={0.7} style={styles.button} >
              <Text style={styles.buttonText}> Save</Text>
            </TouchableOpacity>
          </View>
        
      </View>
    );
  }
}

export default category


const styles = StyleSheet.create({
  category_container: {
    flexDirection:'column',
    alignItems:'center',
    backgroundColor: 'white' ,
     borderRadius :30,
     margin: 10,
     paddingBottom : 20
    },
  button: {
    width: '90%',
    height: 60,
    backgroundColor: '#4CAF50',
    borderRadius: 100,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  textInputStyle1: {
    height: 60,
    width: 370,
    borderWidth: 2,
    borderColor: '#028b53',
    borderRadius: 100,
    margin: 20,
    textAlign: 'center',
    fontSize:20
    
  },
  buttonText: {
    color: '#ededed',
    textAlign: 'center',
    fontSize:20
  },

})