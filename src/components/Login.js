import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })

        });
        const json = await response.json();
        if (json.success) {
            //redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/");
        }
        else{
            alert("Invalid Credentials");
        }

    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <>
            <h2 className='mt-3'>Login to continue to WebNote</h2>
            <div className="container my-3">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 my-3">
                        <label htmlFor="email" className="form-label">Enail Address</label>
                        <input type="email" className="form-control" id="email" name="email" value={credentials.email} aria-describedby="emailHelp" onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label" >Password</label>
                        <input type="password" className="form-control" name="password" value={credentials.password} id="password" onChange={onChange} />
                    </div>
                    <button type="submit" className="btn btn-primary" >Login</button>
                </form>
            </div>
        </>
    )
}

export default Login;