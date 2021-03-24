import React, {useState,useEffect} from 'react';
import {View,Text,StyleSheet,FlatList,Image} from 'react-native';

import yelp from '../api/yelp';

const resultsShowScreen =({navigation}) =>{
    const [result,setResult] = useState(null);
    const id = navigation.getParam('id');
    console.log(result);
    const getResult = async(id) =>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data); 
    };

    useEffect(() => {
        getResult(id);
    }, [])
    if(!result){
        return null;
    }
    return(
        <View>
            {/* <Image source={{uri: result.image_url}}/> */}
            <Text>{result.name}</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={ (photo)=> photo}
                renderItem={ ({item})=>{
                    return <Image style={styles.imageStyles} source={{uri: item}} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyles:{
        width:150,
        height:150
    },
});

export default resultsShowScreen;