import React, {useState} from 'react';
import { Text, View, StyleSheet} from 'react-native';
import SearchBar from '../components/searchbar';

const SearchScreen = () =>{
    const [term, setTerm] = useState('');
    console.log(term);
    return(
        <View style={styles.viewStyle}>
            <SearchBar 
                term={term} 
                onTermChange={ (newTerm) =>setTerm(newTerm)}
                onTermSubmit={()=>console.log('done')} />
        </View>
    );
}

const styles = StyleSheet.create({
  
})

export default SearchScreen;