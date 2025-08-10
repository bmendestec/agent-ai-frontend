import { useNavigate, useLocation } from 'react-router-dom';
import '../../../styles/NavBar.css';
import { useAuth } from '../../../context/AuthContext';
import { ArrowBigLeft, HomeIcon, LogOut } from 'lucide-react';
import { Button } from '../Button';

export function NavBar({ children, isOpen, setIsOpen }) {
    const navigate = useNavigate();
    const location = useLocation();
    const { logout } = useAuth();
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
                            <HomeIcon />
                        </>
                    )}
                </div>
                <div className='contents-nav-buttons'>
                    <Button
                        onClick={() => { navigate('/home') }}
                        variant="nav"
                        isActive={isActive('/home')}
                    >
                        Home
                    </Button>
                    <Button
                        onClick={() => { navigate('/usuarios') }}
                        variant="nav"
                        isActive={isActive('/usuarios')}
                    >
                        Users
                    </Button>
                </div>
            </div>
            <div id='nav-header'>
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