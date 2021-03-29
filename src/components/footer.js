import React, {useState} from 'react';
import { Text,View, StyleSheet,Button, TouchableHighlight} from 'react-native';


const Footer = () =>{
    return(
        <View style={styles.viewStyle} >
            <Text>Tel: (14) 99779-2464</Text>
            <Text>Email: kaiqmo@gmail.com</Text>
            <Text>Github: /kaiqmo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        position:'absolute',
        bottom:0,
        height:60,
        backgroundColor:'#c8c8c8',
        width:'100%'
    },  
  
});

export default Footer;