import React, { useState } from "react";
import axios from 'axios' 
const SignUpForm = (props) => {
  const [user, setUser] = useState({
    fullname: "",
    username: "",
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
    axios.post("http://localhost:4000/api/signup",user)
    setUser({
    fullname: "",
    username: "",
    email: "",
    password: ""
    })
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="FullName">FullName : </label>
        <input type="text" onChange={onChangeHandler} name="fullname" value={user.fullname}/>
      </div>
      <div>
        <label htmlFor="User Name">User Name :</label>
        <input type="text" onChange={onChangeHandler} name="username" value={user.username} />
      </div>
      <div>
        <label htmlFor="Email">Email : </label>
        <input type="email" onChange={onChangeHandler} name="email" value={user.email}/>
      </div>
      <div>
        <label htmlFor="Password">Password : </label>
        <input type="password" onChange={onChangeHandler} name="password" value={user.password}/>
      </div>
      <button type="submit">SignUp</button>
    </form>
  );
};

export default SignUpForm;
