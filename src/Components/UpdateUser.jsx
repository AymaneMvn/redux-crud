import React , {useState} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {updateUserAction} from '../config/action'

export default function UpdateUser() {
    const {id} = useParams()
    const user = useSelector((data) => data.users.find((u)=>u.id===parseInt(id)));
    const [info, setInfo] = useState({ name: user.name, email: user.email });
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setInfo({
        ...info,
        [e.target.name]: e.target.value,
      });
    };
    
  
    const handleClick = () => {
      dispatch(
        updateUserAction({
          id: id,
          name: info.name,
          email: info.email,
        })
      );
      navigate("/");
    };

    
    return (
      <form action="get">
  
        <h1>Update User</h1>
  
  
        <label>Name</label>
        <input type="text" name="name" value={info.name} onChange={handleChange}/>
        
        <label>Email</label>
        <input type="email" name="email" value={info.email} onChange={handleChange}/>
        
        <button onClick={handleClick} type='button'>Save</button>
      
      </form>
    );
  }
