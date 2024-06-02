import React from 'react';

interface ToggleProps {
    onToggle: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ onToggle }) => {
    return (
        <div className='toggle-container'>
            <div className="toggle">
                <div className="toggle-panel toggle-left">
                    <h1>Welcome Back!</h1>
                    <p>Enter your personal details to use all of site features</p>
                    <button onClick={onToggle} id="login">Sign In</button>
                </div>
                <div className="toggle-panel toggle-right">
                    <h1>Hello, Girl Friend!</h1>
                    <p>Register with your personal details to use all of site features</p>
                    <button onClick={onToggle} id="register">Sign Up</button>
                </div>
            </div>
        </div>
    );
}

export default Toggle;
