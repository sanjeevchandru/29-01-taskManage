import React, { useState } from "react";
import './Home.scss'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateAuth } from "./store/Slice";
// import  {useSelector} from 'react-redux'
export const Login=()=>{
    // const a=useSelector((d)=>d.data)
    const b=useDispatch()
    const [userName,setName]=useState("");
    const [pass,setPass]=useState("");
    const [fill,setFill]=useState(false);
    const [isname, issetname] = useState(false);
    const [ispass, issetpass] = useState(false);
    const inputfiled=(e)=>{
        // e.preventDefault()
        if(e.target.name==='uname'){
            // console.log(e.target.value)
            setName(e.target.value)
        }
        else{
            setPass(e.target.value)
        }
    }
    const sub=(e)=>{
        // b(updateAuth(true))
        e.preventDefault()
        if(userName===''||pass===''){
            setFill(true)
            issetname(false)
            issetpass(false)
        }
        else{
            // console.log(a.arr)
            // let x=JSON.parse(localStorage.getItem("account")).some((e)=>{return e.userName===userName&&e.pass===pass})
            // if(x){
                
                let x=JSON.parse(localStorage.getItem("account")).some((e,i)=>{
                    if(e.userName!==userName && e.pass===pass){
                        issetpass(false)
                        issetname(true)
                        setFill(false)
                    }
                    else if(e.pass!==pass && e.userName===userName){
                        issetname(false)
                        issetpass(true)
                        setFill(false)
                    }
                    else if(e.pass!==pass && e.userName!==userName){
                        issetname(true)
                        issetpass(true)
                        setFill(false)
                    }
                        else{issetname(false) 
                            issetpass(false)}
                        return userName===e.userName && pass===e.pass 
                       
                    
                    })
                if(x){
                    // nav('/ban')
                    b(updateAuth(x))
                }
            // }
        }
    }
    return(
        <div className="log-sec">
            <div className="container">
                <form>
                    <div className="input-card">
                    <input type="text" placeholder="User Name" name="uname" onChange={inputfiled}/>
                    {fill && userName===''?<p style={{ color: "red" }}>Enter userName</p>:''    }
                    {isname?<p style={{ color: "red" }}>Enter valid username</p>:''}
                    </div>
                    <div className="input-card">
                    <input type="text" placeholder="Password" name="upass" onChange={inputfiled}/>
                    {fill && pass===''?<p style={{ color: "red" }}>Enter user password</p>:""}
                    {ispass?<p style={{ color: "red" }}>Enter valid password</p>:""}
                    </div>
                    <div className="btn">
                    <button onClick={sub}>Login</button>
                    </div>
                    <div>
                    <Link to='/accreate' style={{color:"#fff"}}>Create New Account?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}