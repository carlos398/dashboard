import React from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";

export const Login = () =>{
    const navigate = useNavigate();

    const login = () =>{
        navigate('/dash')
    };

    return(
        <div className="login">
            <form className="LoginForm">
                <div className = "formcontrol">
                    <label>
                        Username <br/>
                        <input type="text" placeholder="example username"/>
                        <hr/>
                    </label>
                </div>
                <div className = "formcontrol">
                    <label>
                        Password<br/>
                        <input type="password" placeholder="example password"/>
                        <hr/>
                    </label>
                </div>
                <button onClick={login}>Login</button>
            </form>
        </div>
    )
};