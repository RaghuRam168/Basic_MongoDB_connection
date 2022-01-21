import React, { useState } from "react";
import axios from 'axios' 
import './LoginForm.css'
const LoginForm = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const onChangeHandler = (event) =>{

    const name= event.target.name;
    const value= event.target.value;
    const newdata ={...user,[name]:value}
    setUser(newdata);
  }
  const submitHandler = (event) => {
    event.preventDefault()
    props.onSignIn(user);
    axios.post("http://localhost:4000/api/login",user)
    setUser({
    email: "",
    password: ""
    })
  };

  return (
    <div className="division">
    <form onSubmit={submitHandler} className="form">
        <h3>Login</h3>
      <div>
        <input type="email" placeholder="Email" onChange={onChangeHandler} name="email" value={user.email} className="form-control"/>
      </div>
      <div>
        <input type="password" placeholder="Password" onChange={onChangeHandler} name="password" value={user.password} className="form-control"/>
      </div>
       <button onSubmit={submitHandler} >Register</button>
    </form>
    </div>
  );
};

export default LoginForm;
 