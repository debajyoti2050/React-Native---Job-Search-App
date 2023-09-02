import { useState, useEffect } from "react";
import axios from "axios";
// import {RAPID_API_KEY} from "@env"

const rapidApiKey = 'ebfb91f83fmshe8de5fd66ee6144p1e3c92jsne21151846343'

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error , setError] = useState(null);

    const options = {
        
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
        ...query
        },
        headers: {
          'X-RapidAPI-Key': rapidApiKey,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
        
      };

      const fetchData= async() =>{
        setIsLoading(true)
        console.log(query);
        try{
          console.log(rapidApiKey);
            const res = await axios.request(options)
            setData(res.data.data)
            setIsLoading(false)

        }catch(err){
            setError(err)
            console.log(err)
            
            alert('An error occured')
            
        } finally{
            setIsLoading(false)
        }
      }


      useEffect(()=>{
        fetchData()
      },[] )

      const refetch = () =>{
        setIsLoading(true)
        fetchData()
        
      }

      return {data, isLoading, error, refetch }
}


export default useFetch;
