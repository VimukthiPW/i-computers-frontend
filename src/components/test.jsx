import { useState } from "react"
import { PiSeatFill } from "react-icons/pi"
import uploadFile from "../utils/mediaUpload"

//image

export default function Test(){

    const [file , setFile] = useState(null)

    async function upload(){
       try{

        const url = await uploadFile(file)
        console.log(url)

       }catch{
        console.log("Upload Failed")
       }

      
    }


    return(
        <div className="w-full h-full bg-primary flex justify-center items-center">

            <input type="file" onChange={
                (e)=>{
                   setFile(e.target.files[0])
                }
            }/>
            <button onClick={upload} className="W-[200px] h-[40px] bg-blue-500 text-white rounded-lg">
                Upload
            </button>


        </div>
    )
}