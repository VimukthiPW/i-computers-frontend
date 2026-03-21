import { useState } from "react"


export default function Text(){
    const [count,setCount]= useState(0)
    const [status,setStatus]= useState("Sleeping")
    const [isVisible,setIsVisible]= useState(true)

    return(
        <div className="w-full h-full bg-primary flex justify-center items-center">

            <button onClick={
                ()=>{
                    setIsVisible(!isVisible)
                }

                //if else
            } className="w-[50px] h-[50px] bg-red-600 text-white">{isVisible?"x":"0"}</button>
            {/* if */}
            {isVisible && <div className="w-[400px] h-[400px] bg-white flex flex-col justify-center items-center">
                
                <h1 className="text-[50px]">{count}</h1>
                
                <div className="w-full h-[50px] flex justify-center items-center gap-2">
                    
                    <button onClick={
                        ()=>{
                            setCount(count-1)
                        }
                    }
                    className="w-[100px] h-[45px] bg-red-600 text-white">
                        Decrement
                    </button>
                    
                    <button onClick={
                        ()=>{
                            setCount(count+1)
                        
                        }
                    } 
                    className="w-[100px] h-[45px] bg-green-600 text-white">
                        Increment
                    </button>

                </div>
                <h1 className="text-[50px]">{status}</h1>
                
                <div className="w-full h-[50px] flex justify-center items-center gap-2">
                    
                    <button onClick={
                        ()=>{
                            setStatus("Sleeping")
                        }
                    }
                    className="w-[100px] h-[45px] bg-red-600 text-white">
                        Sleep
                    </button>
                    
                    <button onClick={
                        ()=>{
                            setStatus("Awake")
                        
                        }
                    } 
                    className="w-[100px] h-[45px] bg-green-600 text-white">
                        Awake
                    </button>

                </div>

            </div>}

        </div>
    )
}