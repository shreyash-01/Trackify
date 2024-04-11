import { useEffect } from "react";
import Search from "../components/Search Page/Search"
export default function SearchPage(){
    useEffect(() => {
        document.title = "Trackify | Search";
      }, []);
    return(
        <div>
            <Search />
        </div>
    )
}