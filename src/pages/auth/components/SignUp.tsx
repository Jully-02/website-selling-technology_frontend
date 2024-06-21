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
                <input type="email" placeholder='Email' />
                <input type="text" placeholder='Phone number' />
                <div className="full-name">
                    <input type="text" placeholder='First name' />
                    <input type="text" placeholder='Last name' />
                </div>
                <div className="password">
                    <input type="password" placeholder='Password'/>
                    <input type="password" placeholder='Retype password'/>
                </div>
                <span></span>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
