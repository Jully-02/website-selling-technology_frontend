import React from 'react';

const LogIn: React.FC = () => {
    return (
        <div className="form-container sign-in">
            <form>
                <h1>Sign In</h1>
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
                <span>or use your email or password</span>
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <a href="/">Forget Your Password?</a>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}

export default LogIn;
