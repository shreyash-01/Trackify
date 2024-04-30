import { Link, useNavigate} from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import { useAuthContext } from '../../hooks/useAuthContext'
import Nav from "../Nav/Nav";


export default function Register(){

    const [registerData,setRegisterData]=useState({username:'',email:'',password:'', password2:''});
    const [error, setError]=useState(null);
    const { dispatch } = useAuthContext();
    const navigate=useNavigate();

    const handleChange=(e)=>{
        const {name,value}=e.target;
        console.log(registerData);
        setRegisterData((prevFormData)=>{
            return { ...prevFormData, [name]:value,}

    });
    };

    const handleClick=async (e)=>{
        if (!registerData.username || !registerData.email || !registerData.password || !registerData.password2) {
            setError('Please fill in all the fields.');
            return;
        }
        if(registerData.password!==registerData.password2){
            setError("Password are not the same");
            return;
        }

        console.log(registerData);
        
        const sendingData={username:registerData.username, email:registerData.email, password:registerData.password}
        e.preventDefault();
           
        axios.post('http://localhost:8002/register', sendingData)
        .then((response) => {               
            setRegisterData({username:'', email:'',password:'', password2:''});
            const json=response.data;
            if (response.status === 200) {
                        
                localStorage.setItem('user', JSON.stringify(json))
        
                        
                dispatch({type: 'LOGIN', payload: json})
                console.log(response.data.token);
                navigate("/");
            }
            else{
                console.error('Request failed');
                setError(response.data.error)
                
            }                
        })

            
        .catch((error) => {
            console.error(error);
            setError(error.response.data.error);
        });

    };

   

    return(
        <div>
            <Nav />
            <div className="bg-login h-screen w-screen bg-cover bg-no-repeat flex flex-col justify-center items-center">
                <div className="text-5xl font-fira text-white font-white">Register</div>
                <div className="text-xl font-fira text-white font-white mt-4">Please enter your data below</div>
                {error &&
                    <div className="text-red-400 mt-3">{error}</div>}
                <div className="flex flex-col justify-center items-center">
                    <div><input className="h-[2.8vw] w-[25vw] bg-transparent border-gray-300 border-[2px] rounded-md focus:outline-none mt-4
                text-white p-2 font-fira" placeholder="Enter your Username" name="username" value={registerData.username} onChange={handleChange}></input></div>

                    <div><input className="h-[2.8vw] w-[25vw] bg-transparent border-gray-300 border-[2px] rounded-md focus:outline-none mt-4
                text-white p-2 font-fira" placeholder="Enter your Email" name="email" value={registerData.email} onChange={handleChange}></input></div>

                    <div><input className="h-[2.8vw] w-[25vw] bg-transparent border-gray-300 border-[2px] rounded-md focus:outline-none mt-4
                text-white p-2 font-fira" placeholder="Enter your Password" type="password" name="password" value={registerData.password} onChange={handleChange}></input></div>

                    <div><input className="h-[2.8vw] w-[25vw] bg-transparent border-gray-300 border-[2px] rounded-md focus:outline-none mt-4
                text-white p-2 font-fira" placeholder="Re-enter your Password" type="password" name="password2" value={registerData.password2} onChange={handleChange}></input></div>

                    <button className="relative mt-6 h-10 w-80 rounded-lg hover:scale-110 text-white font-fira bg-transparent
                border-white border-[2.5px]" onClick={handleClick}>Register</button>
                    <div className="flex font-sira text-md mt-4 text-white">Already a member?
                        <div className="italic text-blue-900 cursor-pointer hover:underline"><Link to="/login">Login</Link></div>
                    </div>

                </div>

            </div>
        </div>

    )
}