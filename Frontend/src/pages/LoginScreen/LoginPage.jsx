import React from "react";
import person from "../person.jpeg";
import LoginForm from "../../components/Login/NewLogin";
import "./LoginPage.css"
const LoginPage = () => {
  return (
      <div className="login">
        <div className="item1">
          <img className="img" src={person} alt="person" />
          <h2 className="heading" >Welcome to your Dashboard</h2>
          <p className="description">
            Your uploaded APIs will be displayed here once you login to your
            account
          </p>
        </div>
        <div className="item2">
          <div className="form">
            <LoginForm />
          </div>
        </div>
    </div>
  );
};

export default LoginPage;
