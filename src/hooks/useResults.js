import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () =>{
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

    return [searchApi,results,errorMessage];
}