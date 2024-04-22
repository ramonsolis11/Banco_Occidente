import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
        const { data } = await axios.post(
            "http://localhost:5000/api/user/login",
            { username, password }
        );
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
        } catch (error) {
        alert("Login failed!");
        }
    };

    return (
        <div className="container">
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <div className="form-group">
            <label>Username:</label>
            <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            </div>
            <div className="form-group">
            <label>Password:</label>
            <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button type="submit" className="btn btn-primary">
            Login
            </button>
        </form>
        </div>
    );
}

export default Login;
