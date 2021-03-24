import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, ScrollView} from 'react-native';
import yelp from '../api/yelp';
import SearchBar from '../components/searchbar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/resultsList';


const SearchScreen = () =>{
    const [term, setTerm] = useState('');
    const [searchApi,results,errorMessage] = useResults();

    const filterResultsByPrice = (price) =>{
        // $ || $$ || $$$
        return results.filter( result => {
            return result.price === price;
        });
    };

    return(
        <>
        <SearchBar 
            term={term} 
            onTermChange={ (newTerm) =>setTerm(newTerm)}
            onTermSubmit={()=>searchApi(term)} />
        {
            errorMessage > 0 ?
            <Text>{errorMessage}</Text>
            : null
        }
        <Text style={{display:'none'}}>We found {results.length} results</Text>
        <ScrollView>
            <ResultsList 
                results={filterResultsByPrice('$')} 
                title="Cost Effective"/>
            <ResultsList 
                results={filterResultsByPrice('$$')} 
                title="Bit Pricier"/>
            <ResultsList 
                results={filterResultsByPrice('$$$')} 
                title="Big Spender"/>
            <ResultsList 
            results={filterResultsByPrice('$$$$')} 
            title="Whale Spender"/>
        </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    viewStyle:{
        flex:1
    }
})

export default SearchScreen;