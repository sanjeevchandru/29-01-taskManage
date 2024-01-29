import React, { useEffect, useState } from "react";
import { update, updateAuth } from "./store/Slice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { FaRegCircleCheck } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";
import './Home.scss'
export const Form=()=>{
    const [parem]=useSearchParams();
    const [tname,setTname]=useState('');
    const [tdes,setTdes]=useState('');
    const [fill,setFill]=useState(false);
    const [iscom,setCom]=useState(false);
    let nav = useNavigate()
    const a=useSelector((d)=>d.data);
    const b=useDispatch();
    const task=(e)=>{
        if(e.target.name==='taskname'){
            setTname(e.target.value)
        }
        else if(e.target.name==='taskdes'){
            setTdes(e.target.value)
        }
        else if(e.target.name==='radio'){
                setCom(e.target.checked)
        }
        else if(e.target.name==='rradio'){
                setCom(!e.target.checked)
        }
        // console.log(iscom);
    }
    useEffect(()=>{
        if(parem.get('id')!==null){
            console.log(parem.get('id'))
            let y=a.arr.find((e,i)=>{return i===Number(parem.get("id"))})
           setTname(y.tname)
           setTdes(y.tdes)
           setCom(y.iscom)
        }
        else{
            b(update(a.arr))
            setTname('')
            setTdes('')
        }
    },[a.arr,parem,b])
    const taskmanage=(e)=>{
        e.preventDefault()
        
        if(tname===''||tdes===''){
            setFill(true)
        }
       
        else if(parem.get('id')!==null){
            // console.log(a.isEdit)
            let y=new Date().getHours()>12 ?"PM":"AM";
            console.log(y)
            let obj={tname,tdes,iscom,time:new Date().getHours()+":"+new Date().getMinutes()+":"+y}
            let x=a.arr.map((e,i)=>{return i===Number(parem.get('id'))?obj:e})
            b(update(x))
            setTdes(' ')
            setTname(' ')
            setCom(true)
            nav('/home')
        }
        else{
            let y=new Date().getHours()>12 ?"PM":"AM";
            let obj={tname,tdes,iscom,time:new Date().getHours()+":"+new Date().getMinutes()+":"+y};
            b(update([...a.arr,obj]))
            setTdes('')
            setTname('')
            setFill(false)
            setCom(false)
        }
    }
    return(
        <div className="form-sec">
           <div className="nav-row">
                <ImCross onClick={()=>b(updateAuth(false))}/>
            </div>
            <div className="container">
                <h4>Task Management</h4>
                <table style={{width:"100%"}}>
                    <tr>
                        <th>Task Name</th>
                        <th>Task Description</th>
                        <th>Completed (or) Not</th>
                        <th>Done</th>
                    </tr>
                    <tr>
                        <td>
                        <input type="text" value={tname} placeholder="Enter a task Name" name="taskname" onChange={task}/>
                        {fill&&tname===''?<p>Enter a Task Name</p>:''}
                        </td>
                        <td>
                        <input type="text" value={tdes} placeholder="Task Description" name="taskdes" onChange={task}/>
                        {fill&&tdes===''?<p>Enter a Description Name</p>:''}
                        </td>
                        <td style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",border:"0",paddingTop:"10px"}}>
                        <div style={{display:"flex"}}>
                        Check<input type="radio" name="radio" onChange={task} checked={iscom}/>
                        </div>
                        <div style={{display:"flex"}}>
                        Uncheck<input type="radio" name="rradio" onChange={task} checked={!iscom}/>
                        </div>
                        </td>
                        <td  onClick={taskmanage} className="btn-sub">Submit</td>
                    </tr>
                </table>
                <Link to='/home' className="nav-link">Home</Link>
            </div>
        </div>
    )
}