import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";

export const Login = () =>{

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const UserLogin =  async (e) => {
        e.preventDefault();

        const rest = await fetch('http://localhost:8000/api/login/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'username' : email,
                'password' : password
            })
        })
        const data = await rest.json()
        console.log(data.token)

        setEmail('')
        setPassword('')
    }


    const login = () =>{
        navigate('/dash')
    };

    return(
        <div className="login">
            <form className="LoginForm" onSubmit={UserLogin}>
                <div className = "formcontrol">
                    <label>
                        Username <br/>
                        <input type="text" 
                        placeholder="email example" 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}/>
                        <hr/>
                    </label>
                </div>
                <div className = "formcontrol">
                    <label>
                        Password<br/>
                        <input type="password" 
                        placeholder="example password" 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}/>
                        <hr/>
                    </label>
                </div>
                <button>Login</button>
            </form>
        </div>
    )
};