import { useEffect } from "react";
import Register from "../components/Register Page/Register";
export default function RegisterPage(){
    useEffect(() => {
        document.title = "Trackify | Register";
      }, []);
    return(
        <div>
            <Register />
        </div>
    )
}