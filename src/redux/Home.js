import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './Home.scss'
import { useNavigate,Link } from "react-router-dom";
import { update } from "./store/Slice";
import { ImCross } from "react-icons/im"
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
export const Home=()=>{
    const a=useSelector((d)=>d.data)
    const nav=useNavigate()
    const b=useDispatch();
    const edit=(i)=>{
        nav(`/?id=${i}`)
    }
    const del=(index)=>{
        let x=a.arr.filter((e,i)=>{return i!==index?e:''})
        b(update(x))
    }
    return(
        <div className="home-sec">
            <div className="nav-row">
                    <Link to='/'><ImCross  className="nav-link"/></Link>
            </div>
            <div className="container">
                <h3>SIMPLE TASK TRACKER</h3>
            <table style={{width:'100%'}}>
                <tr>
                    <th>S.No</th>
                    <th>Task Name</th>
                    <th>Task Description</th>
                    <th>Completed or not</th>
                    <th>Time</th>
                    <th colSpan="2">Update</th>
                </tr>
                {a.arr.map((e,i)=>{
                    return(
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{e.tname}</td>
                            <td>{e.tdes}</td>
                            {e.iscom?<td style={{backgroundColor:"lightgreen"}}>Completed</td>:
                            <td style={{backgroundColor:"lightpink"}}>Incompleted</td>}
                            <td>{e.time}</td>
                            <td style={{backgroundColor:"lightblue",cursor:"pointer"}} onClick={()=>edit(i)}><GrEdit/></td>
                            <td style={{backgroundColor:"gray",color:"#fff",cursor:"pointer"}} onClick={()=>del(i)}><RiDeleteBin6Line/></td>
                        </tr>
                    )
                })}
            </table>
            </div>
        </div>
    )
}