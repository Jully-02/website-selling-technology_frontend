import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../layouts/footer/Footer';
import Header from '../../layouts/header/Header';
import './SignUpState.css';

function SignUpState() {
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/auth'); 
        }, 30000);

        return () => clearTimeout(timeout); 
    }, [navigate]);

    return (
        <>
            <Header />
            <div className="sign-up-state">
                <i className="fa-solid fa-badge-check"></i>
                <h1 className='notice'>You have successfully registered an account</h1>
                <span>Please check your email to activate your account</span>
            </div>
            <Footer />
        </>
    );
}

export default SignUpState;