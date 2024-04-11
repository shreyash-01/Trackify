import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Nav from "../Nav/Nav";
export default function Product(){
    const { data } = useParams();

    const [responseData, setResponseData]=useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const stringurl='http://localhost:8081/products/'+data;
            console.log(stringurl);
            axios.get(stringurl)
            .then((response) => {               
                const json=response.data;
                if (response.status === 200) {
                    console.log(json);
                    setResponseData(json);
    
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


    return(
        <div className="flex flex-col">
            <div><Nav /></div>
            {responseData &&
                <div className="flex justify-start">
                    <img src={responseData.imageurl} alt="Product Image" className="h-[35vw] mt-[4vw] ml-10"></img>
                    <div className="flex flex-col font-lato justify-start ml-[12vw]">
                        <div className="text-3xl font-bold mt-[5vw]">{responseData.name}</div>
                        <div className="text-2xl mt-[0.7vw]">Rs. {responseData.price}</div>
                        <button className="bg-[#0f056e] text-xl text-white mt-[8vw] w-[12vw] px-2 py-2 rounded-[0.5rem] hover:scale-110">Check</button>
                        <div className="text-md mt-[1vw]">Last Checked at: {responseData.time}</div>
                    </div>

                </div>
            }
        </div>
    )


}