import { useEffect, useState } from "react"
import Nav from "../Nav/Nav"
import axios from "axios";
import { Link } from "react-router-dom";
export default function Products(){
    const [error, setError] = useState('');
    const [data,setData]=useState([]);

    useEffect(() => {
        const fetchData = async () => {
            
            
            axios.get('http://localhost:8081/products')
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
            
            
            <div className="flex flex-wrap justify-left">
                {data.map((product, index) => (
                    <Link to={`/products/${product.id}`} className="flex flex-col items-center justify-start w-[17vw] h-[17vw] border border-gray-300 rounded-lg ml-6 mt-6 hover:scale-110 cursor-pointer" key={index}>
                        
                        <div style={{ backgroundImage: `url(${product.imageurl})` }} className="rounded-lg bg-cover bg-center w-full h-full"></div>
                        
                                 
                        <p className="mt-2 text-center font-lato font-bold">{product.name}</p>
                       
                    </Link>
                ))}
            </div>
        </div>
    )

}