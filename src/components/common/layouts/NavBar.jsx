import { useNavigate, useLocation } from 'react-router-dom';
import '../../../styles/NavBar.css';
import { useAuth } from '../../../context/AuthContext';
import { ArrowBigLeft, ArrowBigRight, HomeIcon, LogOut, User2Icon } from 'lucide-react';
import { Button } from '../Button';

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
                                onClick={() => { navigate('/home') }}
                                variant="nav"
                                isActive={isActive('/home')}
                            >
                                <HomeIcon />
                                Home
                            </Button>
                            <Button
                                onClick={() => { navigate('/usuarios') }}
                                variant="nav"
                                isActive={isActive('/usuarios')}
                            >
                                <User2Icon />
                                Users
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                onClick={() => { navigate('/home') }}
                                variant='collapsed'
                                isActive={isActive('/home')} >
                                <HomeIcon />
                            </Button>
                            <Button
                                onClick={() => { navigate('/usuarios') }}
                                variant='collapsed'
                                isActive={isActive('/usuarios')}>
                                <User2Icon />
                            </Button>
                        </>

                    )}
                </div>
            </div>
            <div className='nav-header'>
                <div className="user-name-cont">
                    {userName}
                </div>
                <div className="logout-button-container">
                    <Button
                        onClick={logout}
                        variant="logout"
                    >
                        <LogOut size={25} className='logout-button-icon' />
                    </Button>
                </div>
            </div>
            <div className='main-container'>
                {typeof children === 'function' ? children({ isOpen }) : children}
            </div>
        </>
    )
}