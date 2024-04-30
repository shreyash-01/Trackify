import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useAuthContext } from "../../hooks/useAuthContext";
import Nav from "../Nav/Nav";
export default function Login(){

    const [loginData,setLoginData]=useState({email:'',password:''});
    const [error,setError]=useState(null);
    const {dispatch}=useAuthContext();
    const navigate=useNavigate();

    const handleChange=(e)=>{
        const {name,value}=e.target;
        // console.log(formData);
        setLoginData((prevFormData)=>{
            return { ...prevFormData, [name]:value,}
        });
    }


    const handleClick=async (e)=>{
        if (!loginData.email || !loginData.password) {
            setError('Please fill in both email and password fields.');
            return;
        }
        console.log(loginData);         
        e.preventDefault();
           
        axios.post('http://localhost:8002/login', loginData)
        .then((response) => {               
            setLoginData({email:'',password:''});
            const json=response.data;
            if (response.status === 200) {
                        
                localStorage.setItem('user', JSON.stringify(json))                       
                dispatch({type: 'LOGIN', payload: json})
                console.log(response.data.token);
                navigate("/");
            }
            else{
                // Handle errors here
                console.error('Request failed');
                setError(response.data.error)
                
            }                
        })
            
        .catch((error) => {
            console.error(error.response.data.error);
           
            setError(error.response.data.error);
            
        });

    };
    return(
        <div>
            <Nav />
            <div className="bg-login h-screen w-screen bg-cover bg-no-repeat flex flex-col justify-center items-center">

                <div className="text-5xl font-fira text-white font-white">Login</div>
                <div className="text-xl font-fira text-white font-white mt-4">Please enter your Email and Password</div>
                {error &&
                    <div className="text-red-400 mt-3">{error}</div>}
                <div className="flex flex-col justify-center items-center">
                    <div><input className="h-[2.8vw] w-[25vw] bg-transparent border-gray-300 border-[2px] rounded-md focus:outline-none mt-4
                text-white p-2 font-fira" placeholder="Username or Email" name="email" value={loginData.email} onChange={handleChange}></input></div>
                    <div><input className="h-[2.8vw] w-[25vw] bg-transparent border-gray-300 border-[2px] rounded-md focus:outline-none mt-4
                text-white p-2 font-fira" placeholder="Password" type="password" name="password" value={loginData.password} onChange={handleChange}></input></div>
                    <div className="flex w-full justify-end text-[0.75rem] text-white cursor-pointer hover:underline hover:scale-105x">Forgot Password?</div>
                    <button className="relative mt-6 h-10 w-80 rounded-lg hover:scale-110 text-white font-fira bg-transparent
                border-white border-[2.5px]" onClick={handleClick}>Login</button>
                    <div className="flex font-sira text-md mt-4 text-white">Not a Member yet?
                        <div className="italic text-blue-900 cursor-pointer hover:underline"><Link to="/register">Register</Link></div>
                    </div>

                </div>
        </div>

            
        </div>
    )

}