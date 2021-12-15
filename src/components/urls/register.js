import React, {useState} from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import "../../App.css";

export const Register = () =>{

    // const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')


    const UserRegister =  async (e) => {
        e.preventDefault();

        const rest = await fetch('http://localhost:8000/api/users/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'email' : email,
                'name' : name,
                'last_name' : lastName,
                'password' : password
            })
        })

        const data = await rest.json()
        console.log(data)
    }

    return(
        <div className="login">
            <form className="LoginForm" onSubmit={UserRegister}>
                <div className = "formcontrol">
                    <label>
                        Email <br/>
                        <input type="text" 
                        placeholder="email example" 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}/>
                        <hr/>
                    </label>
                </div>
                <div className = "formcontrol">
                    <label>
                        name <br/>
                        <input type="text" 
                        placeholder="email example" 
                        onChange={(e) => setName(e.target.value)}
                        value={name}/>
                        <hr/>
                    </label>
                </div>
                <div className = "formcontrol">
                    <label>
                        last name <br/>
                        <input type="text" 
                        placeholder="email example" 
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}/>
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
                <button>Register</button>
                <br/>
                <br/>
                <h5>You have a acount? <Link to={'/'}>GO BACK AND LOGIN</Link></h5>
            </form>
        </div>
    )
};