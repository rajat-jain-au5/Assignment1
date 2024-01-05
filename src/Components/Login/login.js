import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../utils/miscellneous';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const onEmailChange = (e) => {
        setEmailError('');
        setEmail(e.target.value);
        setErrorMessage('');
    }

    const onChangePassword = (e) => {
        setPasswordError('');
        setPassword(e.target.value);
        setErrorMessage('');
    }


    const loginUser = async () => {
        setIsLoading(true);
        let emailvalue = email;
        // eslint-disable-next-line no-useless-escape
        let emailrex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailvalue) {
            setEmailError('Email cant be blank');
            setIsLoading(false);
            return false;
        }
        else if (!emailrex.test(String(emailvalue))) {
            setEmailError("Email is not valid");
            setIsLoading(false);
            return false;
        }
        else if (password === "") {
            setPasswordError('Please enter password');
            setIsLoading(false);
        }
        else {
            let login = {
                email: email,
                password: password
            }
            const res = await userLogin(login);
            console.log(res)
            if (res.success) {
                localStorage.setItem('isLogged', true);
                navigate('/dashboard');
            } else {
                navigate('/login');
                setErrorMessage(res.message)
            }
            setIsLoading(false);
        }
    }

    const loginOnKeyPress = async (e) => {
        if (e.which === 13 || e.keyCode === 13) {
            setIsLoading(true);
            let emailvalue = email;
            // eslint-disable-next-line no-useless-escape
            let emailrex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!emailvalue) {
                setEmailError('Email cant be blank');
                setIsLoading(false);
                return false;
            }
            else if (!emailrex.test(String(emailvalue))) {
                setEmailError("Email is not valid");
                setIsLoading(false);
                return false;
            }
            else if (password === "") {
                setPasswordError('Please enter password');
                setIsLoading(false);
            }
            else {
                let login = {
                    email: email,
                    password: password
                }
                const res = await userLogin(login);
                console.log(res)
                if (res.success) {
                    localStorage.setItem('isLogged', true);
                    navigate('/dashboard');
                } else {
                    navigate('/login');
                    setErrorMessage(res.message)
                }
                setIsLoading(false);
                setIsLoading(false);
            }
        }
    }
    return (
        <div className="row bg-img" style={{ background: `url('/images/img1.jpg') no-repeat center center fixed`, height: '100vh', width: '100%', backgroundColor: '#fff', marginLeft: window.innerWidth > 767 ? -15 : 0 }} >
            <div className='login-holder'>
                <img src='/images/logo.jpg' alt='' height='70px' />
                <h2 className='header-text'>Welcome to SpaceVue</h2>
                <div className='error mt-3'>{errorMessage}</div>

                <div className='mt-3'>
                    <div className="form-group mt-2">
                        <div className="has-search"  >
                            <span className="form-control-feedback" style={{ marginTop: 5 }}>
                                <img src="/images/email.png" alt='' />
                            </span>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" value={email} onChange={(e) => onEmailChange(e)} onKeyPress={(e) => loginOnKeyPress(e)} />
                        </div>
                        <div className='error'>{emailError}</div>
                    </div>
                    <div className="form-group">
                        <div className="has-search"  >
                            <span className="form-control-feedback" >
                                <img src="/images/lock.png" alt='' />
                            </span>
                            <input type="password" className="form-control" aria-describedby="emailHelp" value={password} placeholder="Password" onChange={(e) => onChangePassword(e)} onKeyPress={(e) => loginOnKeyPress(e)} />
                        </div>
                        <div className='error'>{passwordError}</div>

                    </div>
                    <div className='position-relative'>
                        <button onClick={() => loginUser()} disabled={isLoading} className="login-button position-relative">
                            {"LOGIN"}
                        </button>

                    </div>

                </div>
            </div>
        </div>
    )
}
