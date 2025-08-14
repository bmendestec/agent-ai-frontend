import { useNavigate, useLocation } from 'react-router-dom';
import '../layouts/Navbar.css';
import { useAuth } from '../../../context/AuthContext';
import { ArrowBigLeft, ArrowBigRight, HomeIcon, LayoutDashboardIcon, LogOut, PlugZap, Settings2Icon, User2Icon } from 'lucide-react';
import { Button } from '../Button/Button.jsx';

export function NavBar({ children, isOpen, setIsOpen }) {
    const navigate = useNavigate();
    const location = useLocation();
    const { logout, userName } = useAuth();
    const isActive = (path) => location.pathname === path;

    return (
        <>
            <div className={`container-nav ${!isOpen ? "open" : "closed"}`}>
                <div className={`brand ${!isOpen ? "b-open" : "b-closed"}`} onClick={() => setIsOpen(!isOpen)}>
                    {!isOpen ? (
                        <>
                            <h1>Agent AI</h1>
                            <ArrowBigLeft />
                        </>
                    ) : (
                        <>
                            <ArrowBigRight />
                        </>
                    )}
                </div>
                <div className={`contents-nav-buttons ${!isOpen ? "c-uncollapsed" : "c-collapsed"}`}>
                    {!isOpen ? (
                        <>
                            <Button
                                onClick={() => { navigate('/dashboard') }}
                                variant="nav"
                                isActive={isActive('/dashboard')}
                            >
                                <LayoutDashboardIcon />
                                Dashboards
                            </Button>
                            <Button
                                onClick={() => { navigate('/integrations') }}
                                variant="nav"
                                isActive={isActive('/integrations')}
                            >
                                <PlugZap />
                                Integrations
                            </Button>
                            <Button
                                onClick={() => { navigate('/usuarios') }}
                                variant="nav"
                                isActive={isActive('/usuarios') || isActive('/edit-user')}
                            >
                                <User2Icon />
                                Users
                            </Button>
                            <Button
                                onClick={() => { navigate('/settings') }}
                                variant="nav"
                                isActive={isActive('/settings') || isActive('/settings-general')}
                            >
                                <Settings2Icon />
                                Settings
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                onClick={() => { navigate('/dashboard') }}
                                variant='collapsed'
                                isActive={isActive('/dashboard')} >
                                <LayoutDashboardIcon />
                            </Button>
                            <Button
                                onClick={() => { navigate('/integrations') }}
                                variant='collapsed'
                                isActive={isActive('/integrations')} >
                                <PlugZap />
                            </Button>
                            <Button
                                onClick={() => { navigate('/usuarios') }}
                                variant='collapsed'
                                isActive={isActive('/usuarios') || isActive('/edit-user')}>
                                <User2Icon />
                            </Button>
                            <Button
                                onClick={() => { navigate('/settings') }}
                                variant='collapsed'
                                isActive={isActive('/settings') || isActive('/settings-general')}>
                                <Settings2Icon />
                            </Button>
                        </>

                    )}
                </div>
            </div>
            <div className="nav-header">
                <div className={`user-name-cont ${!isOpen ? "uncollapsed-lg-btn" : "collapsed-lg-btn"}`}>
                    <p>
                        {userName}
                    </p>
                </div>
                <div className="logout-button-container">
                    <Button
                        onClick={logout}
                        variant="logout"
                    >
                        <LogOut size={`${!isOpen ? 25 : 15}`} className='logout-button-icon' />
                    </Button>
                </div>
            </div>
            <div className='main-container'>
                {typeof children === 'function' ? children({ isOpen }) : children}
            </div>
        </>
    )
}
