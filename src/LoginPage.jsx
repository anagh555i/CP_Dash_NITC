import { useState, useEffect, useRef } from "react";
import { useCookies } from 'react-cookie'
import "./login.css"

function LoginPage(){
    const [user, setUser, removeUser]=useCookies("user");
    const [token,setToken,removeToken]=useCookies("token");
    const [mode,setMode]=useState(true);
    const password=useRef();
    const year=useRef();
    const handle=useRef(); 
    const real_name=useRef(); 

    async function hashPassword(password){
        const salt=await bcrypt.genSalt(10);
        const hashed=await bcrypt.hash(password,salt);
        password.current="";
        return hashed;
    }

    function handleLogin(){
        if(!username.current || !password.current) return ;
        const userData={ // to be obtained from server
            username:username.current,

        }
        setCookie("user",JSON.stringify(userData),{
            path:"/", // available accross all routes
            expires: new Date(Date.now()+60*60*2000)// 2 hour in millisecond
        })
    }

    useEffect(()=>{
        // setInterval(()=>{
        //     console.log(username.current);
        // },1000);
    },[]);

    return (
        <div id="loginpage">
            <h1>CP</h1>
            <form id="container">
                <Login_singup mode={mode} handle={handle} password={password} real_name={real_name} year={year}/>
                <button className="loginbutton" onSubmit={()=>handleLogin()}>
                    {mode?"Login":"sign in"}
                </button>
            </form>
            <button className="loginbutton" onClick={()=>setMode(!mode)}>
                    {!mode?"->Login":"->sign in"}
                </button>
        </div>
    );
}

export default LoginPage;

function Login_singup({mode,handle,password,real_name,year}){
    if(mode) return(
        <div id="login">
            <h2>handle:</h2>
            <input type="text" onChange={(e)=>handle.current=e.target.value}/>
            <h2>password:</h2>
            <input type="password" onChange={(e)=>password.current=e.target.value}/>
        </div>
    );
    else return(
        <div id="signup">
            <h2>username:</h2>
            <input type="text" onChange={(e)=>username.current=e.target.value}/>
            <h2>realname:</h2>
            <input type="text" onChange={(e)=>real_name.current=e.target.value}/>
            <h2>year:</h2>
            <input type="number" min="1900" max="2025" onChange={(e)=>year.current=e.target.value}/>
            <h2>password:</h2>
            <input type="password" onChange={(e)=>password.current=e.target.value}/>
        </div>
    );
}