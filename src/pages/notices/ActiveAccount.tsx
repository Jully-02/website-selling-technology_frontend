import { useEffect, useRef, useState } from 'react';
import './ActiveAccount.css';
import { activeAccount } from '../../api/user.api';
import Header from '../../layouts/header/Header';
import Footer from '../../layouts/footer/Footer';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

function ActiveAccount() {
    const [isActive, setIsActive] = useState(false);
    const [notice, setNotice] = useState('');
    const {email, activeCode } = useParams();
    const [redirectTimer, setRedirectTimer] = useState(50);
    const [isRedirecting, setIsRedirecting] = useState(false);
    const navigate = useNavigate();

    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;

            const activate = async () => {
                try {
                    if (email && activeCode) {
                        const response = await activeAccount(email, activeCode);
                        console.log(response);
                        if (response.status === 200) {
                            setIsActive(true);
                            setNotice(response.data.message);

                            const timer = setInterval(() => {
                                setRedirectTimer((prevTimer) => prevTimer - 1);
                            }, 1000);
                            setTimeout(() => {
                                clearInterval(timer);
                                navigate('/auth');
                            }, redirectTimer * 1000);
                        } else {
                            setNotice(response.data);
                        }
                    }
                } catch (error) {
                    console.error('Error activating account:', error);
                    setNotice('Something went wrong while activating your account');
                }
            };

            activate();
        }
    }, []);

    return (
        <>
        <Header />
        <div className='active-account'>
            {
                isActive && (
                    <i className ="fa-solid fa-badge-check"></i>
                )
            }
            {
                <h1>{notice}</h1>
            }
            {
                isActive && (
                    <span className='notice'>You will be redirected to the login page within <span className='timer'>{redirectTimer}</span> seconds</span>
                )
            }
        </div>
        <Footer />     
        </>
    )
}

export default ActiveAccount;