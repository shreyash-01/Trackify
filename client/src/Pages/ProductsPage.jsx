import { useEffect } from "react";
import Products from "../components/Products Page/Products"
export default function ProductsPage(){
    useEffect(() => {
        document.title = "Trackify | Products";
      }, []);
    return(
        <div>
            <Products />
        </div>

    )
}