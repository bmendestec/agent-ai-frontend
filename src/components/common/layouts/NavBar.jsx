import { useNavigate, useLocation } from 'react-router-dom';
import '../../../styles/NavBar.css';
import { useAuth } from '../../../context/AuthContext';
import { HomeIcon, LogOut } from 'lucide-react';
import { Button } from '../Button';
import { useState } from 'react';

export function NavBar({ children }) {
    const navigate = useNavigate();
    const location = useLocation();
    const { logout } = useAuth();
    const isActive = (path) => location.pathname === path;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div id='container-nav'>
                <div id='brand'
                    onClick={() => setIsOpen(!isOpen)}>
                    {!isOpen ? <p>My Organizer</p> : <HomeIcon />}
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
                {children}
            </div>
        </>
    )
}