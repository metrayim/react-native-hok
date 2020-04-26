import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
class category extends Component {
  state = {
    avatarSource: '',
  }
  yourFunction = () => {
    console.log('this your function')
  }
  options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  getImage = () => {
    ImagePicker.showImagePicker(this.options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  }

  render() {
    console.log(this.state.avatarSource, "this your image")
    const { avatarSource } = this.state;
    const image = avatarSource ? avatarSource : { uri: 'https://techcrunch.com/wp-content/uploads/2010/07/github-logo.png?w=512' }
    return (
      <View style={{flexDirection:'column',alignItems:'center'}}>
        <View>
          <Text style={{ fontSize: 50, height: 100, textAlign: "center", color: 'red' }}>Category</Text>
        </View>
        <View>
          <TextInput
            style={styles.textInputStyle1}
            placeholder="Name"
          />
        </View>
        <View>
          <TextInput
            style={styles.textInputStyle1}
            placeholder="Prece"
          />
        </View>
        <TouchableOpacity onPress={() => { this.getImage() }} style={{ justifyContent: "center", flexDirection: 'row', marginTop: 30 }}>
        <Text style={styles.buttonText,{color:'red'}}> Upload Image</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Image source={image} style={{ width: 200, height: 200 }} />
        </View>
        
        <TouchableOpacity onPress={() => { this.yourFunction() }} activeOpacity={0.7} style={styles.button} >
          <Text style={styles.buttonText}> Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default category


const styles = StyleSheet.create({
  button: {
    width: '90%',
    height: 60,
    backgroundColor: '#4CAF50',
    borderRadius: 100,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
    
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
    color: 'black',
    textAlign: 'center',
    fontSize:20
  },

})