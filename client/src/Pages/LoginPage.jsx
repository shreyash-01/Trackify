import { useEffect } from "react";
import Login from "../components/Login Page/Login"
export default function LoginPage(){
    useEffect(() => {
        document.title = "Trackify | Login";
      }, []);
    return(
        <div className="w-screen h-screen">
            <Login />
        </div>
    )
}