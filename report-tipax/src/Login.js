import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import App from "./App";
import {
    Routes,
    Route,
    Navigate,
    useNavigate
} from "react-router-dom";


function Login() {
    const navigate = useNavigate();
    const url = "https://jsonplaceholder.typicode.com/users";
    const [username, setUser] = useState('');
    const [password, setPass] = useState('');
    function postRequest() {
        axios
            .post(url, {
                username: username,
                password: password
            })
            .then((response) => {
                alert(`logged in\nUsername: ${username}\nPassword: ${password}`);
                navigate("/home", { replace: true });
            });
    }

    useEffect(() => {
    }, []);

    return (
        <div className="Login">
            <h1 style={{ color: "#15803d" }}>وارد شوید</h1>
            <center>
                <label>
                    نام کاربری: <input name="username" onChange={e => setUser(e.target.value)} />
                </label>
                <hr />
                <label>
                    رمز عبور: <input name="password" onChange={e => setPass(e.target.value)} />
                </label>
                <hr />
                <div class="ant-space-item"><button type="button" onClick={postRequest}
                    class="ant-btn css-1wfosy4 ant-btn-default ant-dropdown-trigger w-50 h-12 bg-green-700 hover:bg-green-600 border-none rounded-md text-white text-center">
                    <p class="text-sm" style={{ 'margin': '5px' }}>ورود</p>
                </button>
                </div>
            </center>
            <Routes>
                <Route
                    // exact
                    path="/home"
                    element={<App />}
                />
                <Route
                    path="/"
                    element={<Login />}
                />
                <Route
                    path="*"
                    element={<Navigate to="/" />}
                />
            </Routes>
        </div>
    );
}

export default Login;