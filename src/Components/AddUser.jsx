import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUserAction } from "../config/action";

function AddUser() {
  const count = useSelector((data) => data.users.length);
  const [info, setInfo] = useState({ name: "", email: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    console.clear();
    console.log(info);
    dispatch(
      addUserAction({
        id: count + 1,
        name: info.name,
        email: info.email,
      })
    );
    navigate("/");
  };
  return (
    <form action="get">

      <h1>Add User</h1>


      <label>Name</label>
      <input type="text" name="name" value={info.name} onChange={handleChange}/>
      
      <label>Email</label>
      <input type="email" name="email" value={info.email} onChange={handleChange}/>
      
      <button onClick={handleClick} type='button'>Save</button>
    
    </form>
  );
}

export default AddUser;
