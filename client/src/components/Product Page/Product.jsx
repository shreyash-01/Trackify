import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

import Nav from "../Nav/Nav";
export default function Product(){
    const { data } = useParams();

    let id="";

    const [responseData, setResponseData]=useState(null);
    const navigate=useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const stringurl='http://localhost:8081/products/'+data;
            axios.get(stringurl)
            .then((response) => {               
                const json=response.data;
                if (response.status === 200) {
                    console.log(json);
                    id=json.id;
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
        
        if(responseData){
            document.title=responseData.name;
        }
    
    }, [data]);


    const handleClick=()=>{
        axios.delete('http://localhost:8081/products/'+responseData.id)

            .then((response) => {

                if (response.status === 200) {
                    navigate(`/products`);


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


    return(
        <div className="flex flex-col">
            <div><Nav /></div>
            {responseData &&
                <div>
                <div className="flex justify-start small:hidden">
                    <img src={responseData.imageurl} alt="Product Image" className="h-[35vw] mt-[4vw] ml-10"></img>
                    <div className="flex flex-col font-lato justify-start ml-[12vw]">
                        <div className="text-6xl font-bold mt-[4vw]">{responseData.website}</div>
                        <div className="text-3xl font-bold mt-[1vw]">{responseData.name}</div>
                        <div className="text-2xl mt-[0.7vw]">Rs. {responseData.price}</div>
                        <button className="bg-[#0f056e] text-xl text-white mt-[8vw] w-[12vw] px-2 py-2 rounded-[0.5rem] hover:scale-110" onClick={handleClick}>Delete</button>
                        <div className="text-md mt-[1vw]">Last Checked at: {responseData.time}</div>
                    </div>

                </div>



                
                
                </div>
            }
        </div>
    )


}
