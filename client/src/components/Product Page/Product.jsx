import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function Product(){
    const { data } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const stringurl='http://localhost:8081/products/'+data;
            console.log(stringurl);
            axios.get(stringurl)
            .then((response) => {               
                const json=response.data;
                if (response.status === 200) {
                    console.log(json);
    
                }
                else{
                    // Handle errors here
                    console.error('Request failed');
                    // setError(response.data.error)
                    
                }                
            })
                
            .catch((error) => {
                console.error(error.response.data.error);
            });
    
          
        }
        fetchData();
    
    }, [data]);


}