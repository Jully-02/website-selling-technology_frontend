import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { LoginDTO } from '../../../dtos/login.dto';
import { login } from '../../../api/user.api';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { getCartFromLocalStorage, insertCartItem } from '../../../api/cart.item.api';
import { CartItemDTO } from '../../../dtos/cart.item.dto';
import { Token } from '@mui/icons-material';

const LogIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validationSchema = yup.object().shape({
        email: yup.string()
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email')
            .required('Information has not been filled in'),
        password: yup.string()
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                'Invalid password'
            )
            .required('Information has not been filled in')
    })

    useEffect(() => {
        validationSchema.validate({
            email,
            password
        }, { abortEarly: false })
            .then(() => {
                setErrorEmail('');
                setErrorPassword('');
            })
            .catch((validationErrors) => {
                let emailError = '';
                let passwordError = '';

                validationErrors.inner.forEach((error: any) => {
                    switch (error.path) {
                        case 'email':
                            emailError = error.message;
                            break;
                        case 'password':
                            passwordError = error.message;
                            break;
                        default:
                            break;
                    }
                });

                setErrorEmail(emailError);
                setErrorPassword(passwordError);
            });
    }, [email, password]);

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }


    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (errorEmail !== '' || errorPassword !== '') {
            setError('Email or password is incorrect');
        }
        else {
            const loginDTO: LoginDTO = {
                email: email,
                password: password
            }
            const response: any = await login(loginDTO);
            if (response.status === 200) {
                setError('');
                const { token } = response.data;
                localStorage.setItem('token', token);
                const decodedToken: any = jwtDecode(token);
                localStorage.setItem('user_id', decodedToken.userId)
                setEmail('');
                setPassword('');
                const redirectAfterLogin = localStorage.getItem("redirectAfterLogin");
                if (redirectAfterLogin) {
                    const carts = await getCartFromLocalStorage();
                    console.log(localStorage.getItem('token'))
                    carts.forEach((key, value) => {
                        const cartItemDTO: CartItemDTO = {
                            user_id: Number(localStorage.getItem("user_id")),
                            product_id: key,
                            quantity: value
                        };
                        insertCartItem(cartItemDTO);
                    });
                    localStorage.removeItem("cart")
                    localStorage.removeItem("redirectAfterLogin");
                    navigate(redirectAfterLogin);
                }
                else {
                    navigate('/')
                }
            }
            else {
                setError('Email or password is incorrect')
            }
        }
    }

    return (
        <div className="form-container sign-in">
            <form onSubmit={handleSubmit}>
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
                <div className="email form-input">
                    <input
                        type="email"
                        placeholder='Email'
                        value={email}
                        onChange={handleChangeEmail}
                    />
                </div>
                <div className="password form-input">
                    <input
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={handleChangePassword}
                    />
                </div>
                {
                    error && (
                        <div className='error' style={{ width: '100%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span className='content' style={{ margin: '0', marginTop: '10px', color: 'red', fontSize: '14px', fontStyle: 'italic' }}>{error}</span>
                        </div>
                    )
                }
                <a href="/">Forget Your Password?</a>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}

export default LogIn;
