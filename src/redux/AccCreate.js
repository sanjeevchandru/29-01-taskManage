import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";

import './Home.scss'
export const AccCreate = () => {
    const [name, setName] = useState("");
    const [mob, setMob] = useState("");
    const [userName, setuserName] = useState("");
    const [pass, setPass] = useState("");
    const [isFill, setFill] = useState(false);
    const [ismob,setmob]=useState(false);
    // const [aob, setAob] = useState([])
    const nav = useNavigate();
    const change = (e) => {
        if (e.target.name === 'name') {
            setName(e.target.value)
        }
        else if (e.target.name === 'mob') {
            setMob(e.target.value)
        }
        else if (e.target.name === 'uname') {
            setuserName(e.target.value)
        }
        else {
            setPass(e.target.value)
        }
    }
    // const submit = (e) => {
    //     e.preventDefault()

    //     if (name === '' || mob === '' || userName === '' || pass === '') {
    //         setFill(true)
    //     }
    //     else {
    //         let obj = { name, mob, userName, pass }
    //         setAob([...aob, obj])
    //         console.log([...aob, obj])
    //         localStorage.setItem("account", JSON.stringify([...aob,obj]))
    //         setFill(false)
    //         setMob('')
    //         setName('')
    //         setPass('')
    //         setuserName('')
    //         nav('/')
    //     }
    // }
    const submit = (e)=>{
        e.preventDefault();
        //console.log("ppp")
        if(name==="" || mob===""|| userName===""|| pass===""){
            console.log("bye")
            setFill(true)
            setmob(false);
        // dispatch(updateFill(true))
        }
       
        else{
            if(mob.length===10){
                let obj = {
                    name,mob,userName,pass
                } 
                localStorage.setItem("account",JSON.stringify([...JSON.parse(localStorage.getItem("account")),obj]))
                setName("")
                setMob("")
                setuserName("")
                setPass("")
                // setFill(true)
                nav('/')
                alert("Successfuly ! Account has been Created.!")
                ismob(false)
            }
            else{
                setmob(true)
                setFill(false)
            }
            

        }
    }
    const exit=()=>{
        nav('/')
    }
    return (
        <div className="acc-sec">
            <div className="container">
                <h3 className="acc-title">Create New Account</h3>
                <form className="acc-form">
                    <div className="input-card">
                        <input type="text" placeholder="Name" onChange={change} name="name" value={name} />
                        { isFill&& name === '' ? <p style={{ color: "red" }}>please enter a name</p> : ''}
                    </div>
                    <div className="input-card">
                        <input type="number" placeholder="Mobile Number" onChange={change} name="mob" value={mob} />
                        {isFill && mob === '' ? <p style={{ color: "red" }}>please enter a mobile number</p> : ''}
                        {ismob?<p>Enter a valid Mobile Number</p>:''}
                    </div>
                    <div className="input-card">
                        <input type="text" placeholder="User Name" onChange={change} name="uname" value={userName} />
                        {isFill && userName === '' ? <p style={{ color: "red" }}>please enter a user name</p> : ''}
                    </div>
                    <div className="input-card">
                        <input type="text" placeholder="Password" onChange={change} value={pass} />
                        {isFill && pass === '' ? <p style={{ color: "red" }}>please enter a user Password</p> : ''}
                    </div>
                    <div className="btn-card">
                        <button onClick={submit}>Sign up</button>
                    </div>
                </form>
                <div className="exit" title="Exit" onClick={exit}>
                    <ImCross className="exit-btn"/>
                </div>
            </div>
        </div>
    )
}