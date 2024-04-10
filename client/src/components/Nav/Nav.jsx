import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuthContext } from "../../hooks/useAuthContext";
import { Link } from "react-router-dom";
export default function Nav(){
    const location = useLocation();
    const [bgClass, setBgClass] = useState('');
    const {user, dispatch}=useAuthContext()
    const handleClick=()=>{
        localStorage.removeItem('user');
        dispatch({type:'LOGOUT'});
    }

    useEffect(() => {
        // Check the current URL pathname and set the bgClass accordingly
        if (location.pathname === '/products') {
          setBgClass('bg-[#1b4eb0] h-[5vw]');
        } else {
          setBgClass('');
        }
      }, [location]);
    return(
        <div className={`flex justify-between text-white ${bgClass}`}>

            <div className="flex basis-1/2 justify-between ml-7 mt-4 font-oswald text-4xl cursor-pointer"><Link to="/">Trackify</Link></div>
            <div className="basis-1/2 flex justify-between mr-[5vw] mt-7 font-open-sans text-xl font-bold">
                <div className="hover:font-bold hover:scale-110 cursor-pointer">Products</div>
                <div className="hover:font-bold hover:scale-110 cursor-pointer">About</div>
                <div className="hover:font-bold hover:scale-110 cursor-pointer">Contact Us</div>
                <div>
                {!user && 
                <Link to="/login">
                <div className="relative bottom-1 hover:font-bold hover:scale-110 h-9 flex justify-center items-center cursor-pointer bg-[#0f056e] hover:bg-white hover:text-black px-4 rounded-lg hover:shadow-md">
                    Sign In
                </div>
                </Link>
                }
                {user &&
                <button onClick={handleClick} className="transition h-10 flex items-center justify-center cursor-pointer hover:font-bold text-xl
               hover:bg-white duration-500 hover:shadow-md hover:text-black w-[100px] rounded-2xl">
                 Logout</button>
                }
                </div>


        </div>
        </div>
    )


}