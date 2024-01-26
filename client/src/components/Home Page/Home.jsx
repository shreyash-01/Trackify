import Nav from "../Nav/Nav"
export default function Home(){
    return(
        <div className="">
            
            <div className="bg-[#1b4eb0] h-[30vw] flex flex-col">
                <Nav /> 
                <div className="flex flex-col text-5xl text-white mt-[6vw] ml-[4vw] font-fira">
                    <div className="font-bold mb-2">Track, Compare</div>
                    <div className="flex mb-2"><div className="font-bold">and Save:</div><div className="ml-2">Your Ultimate</div></div>
                    <div className="">Price Tracker</div>
                    <div><button className="bg-[#0f056e] font-open-sans text-[1.8rem] mt-5 px-7 py-3 ml-7 rounded-[1rem] hover:scale-110">Get Started</button></div>
                </div>

            </div>
            <div class="relative overflow-hidden flex flex-col items-center">
         
                <div className="mt-4 text-[2.25rem] font-roboto-condensed text-black relative right-6">Supported Websites</div>
            </div>
                



    
        </div>
    )
}