import { Button } from "@/components/ui/button";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Auth = () => {
    const [active, setActive] = useState(true);

    return (
        <div className="loginContainer">
            <style>{`
                * { 
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: "Poppins", "sans-serif";
                }

                .loginContainer {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    background: #25252b;
                }

                @property --a {
                    syntax: '<angle>';
                    inherits: false;
                    initial-value: 0deg;
                }

                .box {
                    position: relative;
                    background: repeating-conic-gradient(from var(--a), #ff2770 0%, #ff2770 5%, transparent 5%, transparent 40%, #ff2770 50%);
                    filter: drop-shadow(0 15px 50px #000);
                    border-radius: 20px;
                    animation: rotating 4s linear infinite;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                @keyframes rotating {
                    0% { --a: 0deg; }
                    100% { --a: 360deg; }
                }

                .box::before {
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background: repeating-conic-gradient(from var(--a), #45f3ff 0%, #45f3ff 5%, transparent 5%, transparent 40%, #45f3ff 50%);
                    filter: drop-shadow(0 15px 50px #000);
                    border-radius: 20px;
                    animation: rotating 4s linear infinite;
                    animation-delay: -1s;
                }

                .box::after {
                    content: "";
                    position: absolute;
                    inset: 4px;
                    background: #2d2d39;
                    border-radius: 15px;
                    border: 5px solid #25252b;
                }

                .login {
                    position: absolute;
                    inset: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    border-radius: 10px;
                    background: rgb(0, 0, 0, 0.2);
                    z-index: 1000;
                    box-shadow: inset 0 10px 20px rgb(0, 0, 0, 0.5);
                    border-bottom: 2px solid rgb(255, 255, 255, 0.5);
                    padding: 30px;
                }

                .login h1 {
                    color: #fff;
                    margin-bottom: 20px;
                    font-size: 24px;
                    font-weight: 700;
                    text-align: center;
                }

                .login input {
                    width: 100%;
                    margin: 8px 0;
                    padding: 12px 15px;
                    border: none;
                    border-radius: 8px;
                    outline: none;
                    background: #3c3c4a;
                    color: #fff;
                    font-size: 16px;
                }

                .login input::placeholder {
                    color: #bbb;
                    font-size: 16px;
                }

                .login button {
                    width: 100%;
                    margin-top: 15px;
                    padding: 12px;
                    border: none;
                    border-radius: 8px;
                    background: linear-gradient(90deg, #7b2ff7, #f107a3);
                    color: #fff;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: 0.3s ease;
                }

                .login button:hover {
                    opacity: 0.85;
                }

                .signin-text {
                    margin-top: 10px;
                    width: 100%;
                    text-align: right;
                    font-size: 13px;
                    color: #fff;
                }

                .signin-text a {
                    color: #45f3ff;
                    text-decoration: none;
                    font-size: 13px;
                    margin-left: 4px;
                }

                .signin-text a:hover {
                    text-decoration: underline;
                }
            `}</style>

            <div className="box h-[30rem] w-[25rem]">
                <div className="minContainer login">
                    <div className="loginBox w-full px-10 space-y-5">
                        {active ? <Signup /> : <Login />}

                        <div>
                            <span>Already have account?</span>
                            <Button variant="ghost" onClick={() => setActive(!active)}>
                                {active ? "signin" : "signup"}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
