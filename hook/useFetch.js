import { useState, useEffect } from "react";
import axios from "axios";
// import {RAPID_API_KEY} from "@env"

const rapidApiKey = 'b961abd739mshe89159ae8a2e29ep1040e7jsna87e53625476'

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
            const res = await axios.request(options)
            setData(res.data.data)
            setIsLoading(false)

        }catch(err){
            setError(err)
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
