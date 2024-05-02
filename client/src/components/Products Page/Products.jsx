import { useEffect, useState } from "react"
import Nav from "../Nav/Nav"
import axios from "axios";
import { Link } from "react-router-dom";
export default function Products(){
    const [error, setError] = useState('');
    const [data,setData]=useState([]);

    useEffect(() => {
        const fetchData = async () => {
            
            
            axios.get('http://'+process.env.REACT_APP_IP+':8081/products')
            .then((response) => {

                const json=response.data;
                if (response.status === 200) {
                    console.log(json);
                    setData(json);
                    // setSearchResponse(json.searchResults);


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
        };
    
        fetchData();
    
        // Clean-up function if needed
        // return () => {
        //   cleanup logic here
        // };
      }, []);

      

    

    return(
        <div className="flex flex-col">
            <div><Nav /></div>
            
            
            <div className="flex flex-wrap justify-left small:justify-center">
                {data.map((product, index) => (
                    <Link to={`/products/${product.id}`} className="flex flex-col items-center justify-start small:w-[90vw] small:h-80 small:mb-5 small:ml-0 w-[23vw] h-[25vw] border border-gray-300 rounded-lg ml-6 mt-6 hover:scale-105 cursor-pointer" key={index}>
                        
                        <div style={{ backgroundImage: `url(${product.imageurl})` }} className="rounded-lg bg-cover bg-center w-full h-full"></div>

                        <p className=" text-center font-lato font-extrabold text-xl">{product.website}</p>
                        <p className=" text-center font-lato font-normal text-lg">{product.name}</p>
                        <p className=" text-center font-lato  text-base">Rs. {product.price}</p>
                       
                    </Link>
                ))}
            </div>
        </div>
    )

}