import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate()

    function login(){
        
        //import.meta.env.VITE_API_URL+
        axios.post("http://localhost:3000/api/users/login", 
            {
                email : email,
                password : password
            }
        ).then(
            (response)=>{
                console.log(response)
                toast.success("Login Successful")
                if(response.data.role == "admin"){
                    //window.location.href = "/admin/"
                    navigate("/admin/")


                }else{
                    //redirect to home page "/"
                }
                
            }
        ).catch(
            (error)=>{
                console.log(error)
                toast.error("Login Failed")
            }
        )
    }
    /*async function login(){
    try{
        const responce = await axios.post("http://localhost:3000/users/login",
            {
                email : email,
                password : password
            }
        )
        console.log(responce)
        //alert("login successful")
        toast.success("Login Successful")

    }catch(error){
        console.log(error)
        toast.error("Login Failed")
    }
   } */


    return(
        <div className="w-full h-full bg-[url('/background.jpg')] bg-cover no-repeat bg-center flex">

            <div className="w-[50%] h-full flex justify-center items-center flex-col">

                <img src="/logo.png" className="w-[300px]" />
                <h1 className="text-4xl font-bold mt-5 text-white">PW Computers</h1>


            </div>
            <div className="w-[50%] h-full flex justify-center items-center">

                    <div className="backdrop-blur-3xl w-[450px] h-[600px] shadow-2xl rounded-b-lg">

                        <input 
                        type="email" 
                        placeholder="Email"

                        onChange={
                            (e)=>{
                                setEmail(e.target.value)
                            }
                        }
                        
                        className="m-5 p-3 w-[90%] h=[50px] rounded-lg border border-secondary outline-none"/>

                        <input 
                        type="password" 
                        placeholder="Password" 

                        onChange={
                            (e)=>{
                                setPassword(e.target.value)
                            }
                        }

                        className="m-5 p-3 w-[90%] h=[50px] rounded-lg border border-secondary outline-none"/>

                        <p className="w-full text-right pr-7">Forgot Password?<Link to="/register" className="text-accent">Reset</Link></p>

                        <button onClick={login} className="m-5 p-3 w-[90%] h-[50px] bg-accent rounded-lg text-white font-bold">Login</button>

                        <button className="m-5 p-3 w-[90%] h-[50px] border border-accent rounded-lg text-white font-bold">Login with Google</button>
                        <p className="w-full text-right pr-7">Don't have an account? <Link to="/register" className="text-accent">Register</Link></p>
                    </div>
            </div>

            
        </div>
    )
} 