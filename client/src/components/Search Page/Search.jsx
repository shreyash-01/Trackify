import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import axios from "axios";

import Nav from "../Nav/Nav"
export default function Search(){

    const animationVariants = {
        initial: { x: '-4vw', opacity: 0 },
        animate: { x: 0, opacity:1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, transition: { duration: 0.5, delay: 3 } }
    };

    const [searchData, setSearchData]=useState({"url":'',"website":'volvo' });
    const navigate=useNavigate();


    const [successPopup, setSuccessPopup]=useState(false);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setSearchData(prevData => ({
            ...prevData,
            [name]: value
        }));
        // console.log(searchData);
    };

    const handleClick=()=>{
        const data=searchData;
        console.log(data);
        setSearchData({"url":'',"website":''});
        axios.post('http://localhost:8081/products', data)
            .then((response) => {               
                const json=response.data;
                console.log(json)
                if (response.status === 200) {
                    console.log(json);
                    
                    setSuccessPopup(true);
                    const id=json.id;

                    navigate(`/products/${id}`);

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
    
    return (
        <div className="flex flex-col">
            <div className=""><Nav /></div> 
        
        {successPopup &&
            <motion.div variants={animationVariants} initial="initial" animate="animate" exit="hidden" className='flex justify-start relative top-[3vw] h-[5vw] w-[15vw] bg-white rounded-sm shadow-xl z-10'>
                <div className='bg-green-400 h-full w-5'></div>
                <div className='flex relative top-4 ml-2'>The search was Sucess!</div>
            </motion.div>
        
        }
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center h-[40vw]">
            <motion.div initial={{ scale: 0.92, opacity:0 }} animate={{ scale: 1, opacity:1 }} transition={{ type: "spring", duration: 0.7 }} className="bg-[#1b4eb0] small:h-auto small:p-6 h-[20vw] w-[50vw] flex flex-col rounded-xl shadow-2xl justify-center">
                <div className="flex ml-20"> 
                <select id="company" className="h-[2.5vw] small:relative small:right-20 small:h-6 small:w-40 small:text-[3vw] w-[6vw] text-[1.2vw] rounded-lg cursor-pointer font-ubuntu outline-none" name="website" value={searchData.website} onChange={handleChange}>
                    <option value="">Select a website</option>
                    <option value="nike" className="cursor-pointer">Nike</option>
                    <option value="puma" className="cursor-pointer">Puma</option>
                    <option value="snitch" className="cursor-pointer">Snitch</option>
                    <option value="nykaa" className="cursor-pointer">Nykaa</option>
                    <option value="adidas" className="cursor-pointer">Adidas</option>
                </select>
                </div>
                
                <div className="flex justify-center">
                    <input type="text" className="mt-7 small:h-6 small:text-sm w-[40vw] h-[3vw] rounded-[0.5rem] text-xl outline-none pl-3 pr-2 font-lato" placeholder="Enter URL" name="url" value={searchData.url} onChange={handleChange}></input>
                </div>
                <div className="flex justify-center relative right-10 mt-7 small:mt-3">
                    <button className="bg-[#0f056e] font-open-sans small:text-[2.5vw] text-[1.3vw] text-white mt-5 px-10 py-2 ml-7 rounded-[0.5rem] hover:scale-110" onClick={handleClick}>Find</button>
                </div>
            </motion.div>
        </div>

        </div>
    )
}