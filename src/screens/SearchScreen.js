import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet} from 'react-native';
import yelp from '../api/yelp';
import SearchBar from '../components/searchbar';
import useResults from '../hooks/useResults';



const SearchScreen = () =>{
    const [term, setTerm] = useState('');
    const [searchApi,results,errorMessage] = useResults();

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