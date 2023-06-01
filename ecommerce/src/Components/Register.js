import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import { useEffect } from 'react';

function Register(props) {
const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const Navigate=useNavigate();


 useEffect(()=>{
    const auth=localStorage.getItem('user');

    if(auth)
    {
        Navigate('/')
    }
},[])



const collectData= async ()=>{
    console.log(name,email,password);
    let result=await fetch("http://localhost:5000/register",{
        method:'post',
        body:JSON.stringify ({name,email,password}),
        headers:{
            'Content-Type':'application/json'
        }
    }); 
    
         result=await result.json();
        console.log(result);
        localStorage.setItem("user",JSON.stringify(result));
        Navigate('/')

}

    return (
        <div className='register'> 
        <input className='inputBox' type='text' placeholder='Enter Name'
        value={name} onChange={(e)=>setName(e.target.value)}  />

        <input className='inputBox' type='text' placeholder='Enter Email' 
        value={email} onChange={(e)=>setEmail(e.target.value)}  />

        <input className='inputBox' type='password' placeholder='Enter password' 
        value={password} onChange={(e)=>setPassword(e.target.value)} />

        <button onClick={collectData} className='appButton'style={{color: "white"}} type='buttton'>signup</button>
        </div>
    );
}

export default Register;