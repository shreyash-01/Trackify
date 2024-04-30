import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuthContext } from "../../hooks/useAuthContext";
import { Link } from "react-router-dom";
export default function Nav(){
    const location = useLocation();
    const [bgClass, setBgClass] = useState('');
    const [showLinks, setShowLinks] = useState(false);
    const {user, dispatch}=useAuthContext()
    const handleClick=()=>{
        localStorage.removeItem('user');
        dispatch({type:'LOGOUT'});
    }
    const toggleLinks = () => {
      setShowLinks(!showLinks);
    };

    useEffect(() => {
        // Check the current URL pathname and set the bgClass accordingly
        if (location.pathname === '/products' || '/search') {
          setBgClass('bg-[#1b4eb0]');
        } else {
          setBgClass('');
        }
      }, [location]);
    return(
        <div className={`flex justify-between text-white ${bgClass}`}>

            <div className="flex basis-1/2 small:text-3xl small:basis-1/4 justify-between ml-7 mb-5 mt-3 font-oswald text-5xl cursor-pointer"><Link to="/">Trackify</Link></div>
            
            
            <div className="basis-1/2 flex justify-between mr-[5vw] mt-7 font-open-sans text-[1.3vw] font-bold small:hidden">
                <div className="hover:font-bold hover:scale-110 cursor-pointer"><Link to="/products">Products</Link></div>
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
            
            <div className='large:hidden small:mr-5 small:mt-3'>
              <button onClick={toggleLinks} className="text-white font-open-sans p-2 text-sm h-auto w-auto rounded-md bg-[#0f056e]">
                  {showLinks ? 'Hide' : 'Show'}
              </button>

              {showLinks &&
                <div className='flex flex-col absolute right-10 bg-white shadow-md text-black'>
                  <div className="hover:font-bold hover:scale-110 cursor-pointer"><Link to="/products">Products</Link></div>
                  <div className="hover:font-bold hover:scale-110 cursor-pointer">About</div>
                  <div className="hover:font-bold hover:scale-110 cursor-pointer">Contact Us</div>
                  {!user && (
                    <Link to="/login">
                      <div className="relative bottom-1 hover:font-bold hover:scale-110 h-9 flex items-center cursor-pointer bg-[] hover:bg-white hover:text-black px-4 rounded-lg hover:shadow-md">
                        Sign In
                      </div>
                    </Link>
                  )}
                  {user && (
                    <button onClick={handleClick} className="transition h-10 flex items-center justify-center cursor-pointer hover:font-bold text-xl hover:bg-white duration-500 hover:shadow-md hover:text-black w-[100px] rounded-2xl">
                      Logout
                    </button>
                  )}
              </div>
              }

            </div>
        </div>
    )


}