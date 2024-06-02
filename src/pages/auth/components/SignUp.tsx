import React from 'react';

const SignUp: React.FC = () => {
    return (
        <div className="form-container sign-up">
            <form>
                <h1>Create Account</h1>
                <div className="social-icons">
                    <a href="/">
                        <i className="fa-brands fa-google"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
