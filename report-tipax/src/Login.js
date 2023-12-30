import "./main.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import tipaxLogo from "./static/media/TipaxLogo.png";
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";


function Login() {
    const jsonData = {
        "ClientName": "Tipax-APIUser",
        "ClientId": "Tipax-APIUser",
        "Secret": "TipaxApi",
        "UserName": "TrackingUser",
        "Password": "Tr@ck!ng",
        "Scope": "openid profile user_info"
    };
    // console.log(jsonData)
    const navigate = useNavigate();
    const url = "http://jet.tipax.ir:100/core/connect/token";
    const [username, setUser] = useState('');
    const [password, setPass] = useState('');
    function postRequest() {
        console.log(username)
        // axios
        //     .post(url, jsonData)
        //     .then((response) => {
        //         console.log(`Response: ${response}\nUsername: ${username}\nPassword: ${password}`);
        //         navigate("/home", { replace: true });
        //     });

        navigate("/home", { replace: true });
        // const response = await fetch(url, {
        //     method: "POST",
        //     body: jsonData,
        //     headers: {
        //         "Content-type": "application/json"
        //     }
        // });
        // console.log(response.json())
    }

    useEffect(() => {
        // postRequest()
    }, []);

    return (
        <div className="Login">
            <div className="Toastify" />
            <div className="login_background h-screen">
                <div className="container mx-auto undefined">
                    <div className="flex justify-center xl:justify-start">
                        <form className="ant-form ant-form-horizontal css-1wfosy4 bg-white shadow-xl max-w-lg flex-1 mt-40 form-login p-10 mx-8 xl:mx-40">
                            <div className="text-center">
                                <img
                                    alt="TipaxLogo"
                                    className="w-48 inline-block"
                                    src={tipaxLogo}
                                />
                                <div>
                                    <p className="font-bold opacity-75 mt-2">لطفا نام کاربری و رمز عبور خود را وارد نمایید</p>
                                </div>
                            </div>
                            <div className="ant-form-item css-1wfosy4">
                                <div className="ant-row ant-form-item-row css-1wfosy4">
                                    <div className="ant-col ant-form-item-control css-1wfosy4">
                                        <div className="ant-form-item-control-input">
                                            <div className="ant-form-item-control-input-content"><span className="ant-input-affix-wrapper h-12 p-3 mt-4 css-1wfosy4"><input placeholder="نام کاربری" id="username" onChange={e => setUser(e.target.value)} className="ant-input css-1wfosy4" type="text" /><span className="ant-input-suffix"><span className="ant-input-clear-icon ant-input-clear-icon-hidden" role="button" tabIndex={-1}><span role="img" aria-label="close-circle" className="anticon anticon-close-circle"><svg fillRule="evenodd" viewBox="64 64 896 896" focusable="false" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                <path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z">
                                                </path>
                                            </svg></span></span></span></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ant-form-item css-1wfosy4">
                                <div className="ant-row ant-form-item-row css-1wfosy4">
                                    <div className="ant-col ant-form-item-control css-1wfosy4">
                                        <div className="ant-form-item-control-input">
                                            <div className="ant-form-item-control-input-content"><span className="ant-input-affix-wrapper ant-input-password h-12 p-3 mt-4 css-1wfosy4"><input placeholder="رمز عبور" id="password" type="password" className="ant-input css-1wfosy4" onChange={e => setPass(e.target.value)} /><span className="ant-input-suffix"><span role="img" aria-label="eye-invisible" tabIndex={-1} className="anticon anticon-eye-invisible ant-input-password-icon"><svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z">
                                                </path>
                                                <path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z">
                                                </path>
                                            </svg></span></span></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ant-form-item text-center css-1wfosy4">
                                <div className="ant-row ant-form-item-row css-1wfosy4">
                                    <div className="ant-col ant-form-item-control css-1wfosy4">
                                        <div className="ant-form-item-control-input">
                                            <div className="ant-form-item-control-input-content"><button type="submit" className="ant-btn css-1wfosy4 ant-btn-primary ant-btn-block bg-green-700 text-white mt-4 h-12" onClick={() => postRequest()}><span>ورود</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div id="naptha_container0932014_0707" />
        </div>
    );
}

export default Login;