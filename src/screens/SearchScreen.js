import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet} from 'react-native';
import yelp from '../api/yelp';
import SearchBar from '../components/searchbar';




const SearchScreen = () =>{
    const [term, setTerm] = useState('');
    const [results,setResults] = useState([]);
    const [errorMessage,setErrorMessage] = useState('');

    const searchApi = async(searchTerm) =>{
        try{
        const response = await yelp.get('/search',{
            params:{
                limit:50,
                term:searchTerm,
                location:'sao paulo'
            }
        });
        setResults(response.data.businesses);
        }catch(e){
            console.log('error',e);
            setErrorMessage('Something went Wrong');
        }
    };

    // call searchApi when component is rendered
    // useEffect can be used to call the function only when the page starts! or multiple times depending on the arary
    useEffect(()=>{
        searchApi('pasta');
    },[])

    return(
        <View style={styles.viewStyle}>
            <SearchBar 
                term={term} 
                onTermChange={ (newTerm) =>setTerm(newTerm)}
                onTermSubmit={()=>searchApi(term)} />
            {
                errorMessage > 0 ?
                <Text>{errorMessage}</Text>
                : null
            }
            <Text>We found {results.length} results</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  
})

export default SearchScreen;