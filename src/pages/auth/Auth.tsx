import './Auth.css';
import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header-home/HeaderHome";
import SignUp from "./components/SignUp";
import LogIn from './components/LogIn';
import Toggle from './components/Toggle';
import { useState } from 'react';

const Auth: React.FC = () => {
    const [isRegisterActive, setIsRegisterActive] = useState(false);

    const handleToggle = () => {
        setIsRegisterActive(!isRegisterActive);
    };

    return (
        <>
            <Header />
            <div className="auth">
                <div className={`container ${isRegisterActive ? "active" : ""}`} id="container">
                    <SignUp />
                    <LogIn />
                    <Toggle onToggle={handleToggle} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Auth;
