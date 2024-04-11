import Nav from "../Nav/Nav"
export default function Search(){
    return (
        <div className="flex flex-col">
            <div className="bg-[#1b4eb0] h-20"><Nav /></div> 
        
        <div className="flex justify-center items-center h-[40vw]">
            <div className="bg-[#1b4eb0] h-[20vw] w-[50vw] flex flex-col rounded-xl shadow-2xl justify-center">
                <div className="flex ml-20"> 
                <select id="company" className="h-[2.5vw] w-[6vw] text-[1.2vw] rounded-lg cursor-pointer font-ubuntu outline-none">
                    <option value="volvo" className="cursor-pointer">Nike</option>
                    <option value="saab" className="cursor-pointer">Puma</option>
                    <option value="fiat" className="cursor-pointer">Snitch</option>
                    <option value="audi" className="cursor-pointer">Nykaa</option>
                    <option value="audi" className="cursor-pointer">Adidas</option>
                </select>
                </div>
                
                <div className="flex justify-center">
                    <input type="text" className="mt-7  w-[40vw] h-[3vw] rounded-xl text-xl outline-none pl-3 pr-2 font-ubuntu" placeholder="Enter URL"></input>
                </div>
                <div className="flex justify-center relative right-10 mt-7">
                    <button className="bg-[#0f056e] font-open-sans text-[1.2vw] text-white mt-5 px-10 py-2 ml-7 rounded-[1rem] hover:scale-110">Find</button>
                </div>
            </div>
        </div>

        </div>
    )
}