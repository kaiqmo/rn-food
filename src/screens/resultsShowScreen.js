import React from 'react';
import {View,Text,Stylesheet} from 'react-native';

const resultsShowScreen =({navigation}) =>{
    const id = navigation.getParam('id');
    return(
        <View>
            <Text>resultsShow {id}</Text>
        </View>
    )
}

export default resultsShowScreen;