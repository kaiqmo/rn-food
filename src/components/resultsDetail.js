import React from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';
import ResultsList from './resultsDetail';

const ResultsDetail = ({result}) =>{
    return(
        <View style={styles.container}>
            <Image 
                style={styles.imageStyles} 
                source={{uri:result.image_url}} />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text style={styles.ratingStyles}>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft:15
    },  
    imageStyles:{
        width:250,
        height:120,
        borderRadius:4,
        marginBottom:5
    },
    nameStyle:{
        fontSize:16,
        fontWeight:'bold'
    },
    ratingStyles:{

    }
});

export default ResultsDetail;