import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import debounce from 'lodash.debounce';
import { emailUnique, register } from '../../../api/user.api';
import { RegisterDTO } from '../../../dtos/register.dto';
import axios, { AxiosError } from 'axios';

interface Touched {
    email: boolean;
    phoneNumber: boolean;
    password: boolean;
    retypePassword: boolean;
}

const SignUp: React.FC = () => {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorRetypePassword, setErrorRetypePassword] = useState('');
    const [errorPhoneNumber, setErrorPhoneNumber] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const navigate = useNavigate();

    const [touched, setTouched] = useState<Touched>({
        email: false,
        phoneNumber: false,
        password: false,
        retypePassword: false,
    });

    const validationSchema = yup.object().shape({
        phoneNumber: yup.string()
            .matches(/^(0\d{9})$/, 'Invalid phone number')
            .required('Information has not been filled in'),
        email: yup.string()
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email')
            .required('Information has not been filled in'),
        password: yup.string()
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                'Invalid password'
            )
            .required('Information has not been filled in'),
        retypePassword: yup.string()
            .oneOf([yup.ref('password')], 'Passwords must match')
            .required('Information has not been filled in'),
    });

    const checkEmailUnique = useCallback(
        debounce(async (email: string) => {
            try {
                const isUnique = await emailUnique(email);
                console.log(isUnique)
                if (!isUnique) {
                    setErrorEmail('Email is already taken');
                } else {
                    setErrorEmail('');
                }
            } catch (error) {
                setErrorEmail('Error checking email');
            }
        }, 100),
        []
    );

    useEffect(() => {
        validationSchema.validate({
            phoneNumber,
            email,
            password,
            retypePassword,
        }, { abortEarly: false })
            .then(() => {
                setErrorPhoneNumber('');
                setErrorEmail('');
                setErrorPassword('');
                setErrorRetypePassword('');
                checkEmailUnique(email);
            })
            .catch((validationErrors) => {
                let phoneError = '';
                let emailError = '';
                let passwordError = '';
                let retypePasswordError = '';

                validationErrors.inner.forEach((error: any) => {
                    switch (error.path) {
                        case 'phoneNumber':
                            phoneError = error.message;
                            break;
                        case 'email':
                            emailError = error.message;
                            break;
                        case 'password':
                            passwordError = error.message;
                            break;
                        case 'retypePassword':
                            retypePasswordError = error.message;
                            break;
                        default:
                            break;
                    }
                });

                setErrorPhoneNumber(phoneError);
                setErrorEmail(emailError);
                setErrorPassword(passwordError);
                setErrorRetypePassword(retypePasswordError);
            });
    }, [phoneNumber, email, password, retypePassword]);

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleRetypePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRetypePassword(e.target.value);
    };

    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };

    const handleBlur = (field: keyof Touched) => {
        setTouched({
            ...touched,
            [field]: true,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (errorEmail === '' && errorRetypePassword === '' && errorPhoneNumber === '' && errorPassword === '') {
            const registerDTO: RegisterDTO = {
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password,
                phone_number: phoneNumber,
                retype_password: retypePassword,
                address: '',
                date_of_birth: new Date(),
                facebook_account_id: 0,
                google_account_id: 0,
                role_ids: [2]
            }
            const response: any = await register(registerDTO);
            if (response.status === 200) {
                setEmail('');
                setPassword('');
                setRetypePassword('');
                setFirstName('');
                setLastName('');
                setPhoneNumber('');
                navigate('/sign-up-state');
            }
        }
    }

    return (
        <div className="form-container sign-up">
            <form onSubmit={handleSubmit} className='form'>
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
                <div className="email form-input">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onBlur={() => handleBlur('email')}
                        onChange={handleEmailChange}
                    />
                    <div className="error">
                        {errorEmail &&
                            <div>
                                <span style={{ color: '#F26300', paddingRight: '10px' }}>{errorEmail}</span>
                                <i className="fa-light fa-triangle-exclamation"></i>
                            </div>
                        }
                    </div>
                </div>
                <div className="phone-number form-input">
                    <input
                        type="text"
                        placeholder='Phone number'
                        value={phoneNumber}
                        onBlur={() => handleBlur('phoneNumber')}
                        onChange={handlePhoneNumberChange}
                    />
                    <div className="error">
                        {errorPhoneNumber &&
                            <div>
                                <span style={{ color: '#F26300', paddingRight: '10px' }}>{errorPhoneNumber}</span>
                                <i className="fa-light fa-triangle-exclamation"></i>
                            </div>
                        }
                    </div>
                </div>
                <div className="full-name">
                    <div className="first-name form-input">
                        <input
                            type="text"
                            placeholder='First name'
                            value={firstName}
                            onChange={handleFirstNameChange}
                        />
                    </div>
                    <div className="last-name form-input">
                        <input
                            type="text"
                            placeholder='Last name'
                            value={lastName}
                            onChange={handleLastNameChange}
                        />
                    </div>
                </div>
                <div className="password form-input">
                    <input
                        type="password"
                        placeholder='Password'
                        value={password}
                        onBlur={() => handleBlur('password')}
                        onChange={handlePasswordChange}
                    />
                    <div className="error">
                        {errorPassword &&
                            <div>
                                <span style={{ color: '#F26300', paddingRight: '10px' }}>{errorPassword}</span>
                                <i className="fa-light fa-triangle-exclamation"></i>
                            </div>
                        }
                    </div>
                </div>
                <div className="retype-password form-input">
                    <input
                        type="password"
                        placeholder='Retype password'
                        value={retypePassword}
                        onBlur={() => handleBlur('retypePassword')}
                        onChange={handleRetypePasswordChange}
                    />
                    <div className="error">
                        {errorRetypePassword &&
                            <div>
                                <span style={{ color: '#F26300', paddingRight: '10px' }}>{errorRetypePassword}</span>
                                <i className="fa-light fa-triangle-exclamation"></i>
                            </div>
                        }
                    </div>
                </div>
                <span className='note'>By signing up, you agree to Gizmos's <Link to='/'>Terms of Service</Link> & <Link to={'/'}>Privacy Policy</Link></span>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
