import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import Footer from '../components/footer';
import logo from '../../assets/icon.png';
import SearchScreen from './SearchScreen';

const HomeScreen = () =>{

    return(
        <View style={styles.viewStyle}>
            <Image
                style={styles.tinyLogo}
                source={logo}
            />
            <SearchScreen/>
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle:{
        flex:1,
    }
})

export default HomeScreen;