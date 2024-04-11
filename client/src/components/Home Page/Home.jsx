import Nav from "../Nav/Nav"
import { Link } from "react-router-dom"
export default function Home(){
    return(
        <div className="">
            
            <div className="bg-[#1b4eb0] h-[30vw] flex flex-col">
                <Nav /> 
                <div className="flex flex-col text-5xl text-white mt-[6vw] ml-[4vw] font-fira">
                    <div className="font-bold mb-2">Track, Compare</div>
                    <div className="flex mb-2"><div className="font-bold">and Save:</div><div className="ml-2">Your Ultimate</div></div>
                    <div className="">Price Tracker</div>
                    <div><Link to="/search"><button className="bg-[#0f056e] font-open-sans text-[1.8rem] mt-5 px-7 py-3 ml-7 rounded-[1rem] hover:scale-110">Get Started</button></Link></div>
                </div>

            </div>
            <div class="relative overflow-hidden flex flex-col items-center">
         
                <div className="mt-4 text-[2.5rem]  font-roboto-condensed text-black relative right-6">Supported Websites</div>

                <div className="flex items-center w-full mt-8">
                    {/* <div className="bg-nike bg-cover bg-no-repeat h-[12vw] w-[20vw]">dfdf</div> */}
                    <img src="nike.jpg" className="ml-[8vw] h-[5vw] w-[10vw]" alt="Nike"></img>
                    <img src="adidas.jpg" className="ml-[8vw] h-[6vw] w-[10vw]" alt="Adidas"></img>
                    <img src="puma.jpg" className="ml-[8vw] h-[6vw] w-[10vw]" alt="Puma"></img>
                    <img src="nykaa.jpg" className="ml-[8vw] h-[4vw] w-[10vw]" alt="Nykaa"></img>
                    <img src="snitch.jpg" className="ml-[8vw] h-[8vw] w-[11vw]" alt="Snitch"></img>
                </div>
            </div>
                



    
        </div>
    )
}