import React from 'react';
import './header.scss';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/login')
    }
    return (
        <div>
            <div className='sm-holder'>
                <div className="bg-dark p-3 header-container">

                    <div className=" d-flex justify-content-between align-items-center me-auto ms-auto">

                        <img src="/images/logo.jpg" alt="" width={60} />
                        <div className='me-4'>
                            <div className="user-sign-option" >
                                <ul style={{ listStyle: 'none', paddingLeft: '15%', paddingTop: 0 }}>
                                    <li className="dropdown">
                                        <div className="dropdown-toggle" href="" id="Dropdown" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false"
                                            style={{ color: '#fff', textDecoration: 'none' }}>
                                            {'Rajat'}
                                        </div>
                                        <ul className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="Dropdown cursor-pointer">
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li onClick={logout}><div className="dropdown-item">Sign Out</div></li>
                                        </ul>
                                    </li>
                                </ul >
                            </div >
                            <div className="user-menu-section">

                                <div className="dropdown-toggle menu-icon" id="Dropdown1" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false"
                                    style={{ color: '#fff', textDecoration: 'none' }}>
                                    <i className="bi bi-list" style={{ color: '#fff', fontSize: 28 }}></i>
                                </div>

                                <ul className="dropdown-menu dropdown-menu-end mobile-dropdown-menu-items"
                                    aria-labelledby="Dropdown">
                                </ul>
                            </div>
                        </div>

                    </div >

                </div >
                <div className='layout-container'>

                    <React.Suspense fallback={''}>
                        <Outlet />
                    </React.Suspense>
                </div>
            </div >
        </div>
    )
}
