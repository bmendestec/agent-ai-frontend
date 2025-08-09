import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Navbar.css'
import { useAuth } from '../context/AuthContext';
import { LogOut } from 'lucide-react';

export function NavBar({ children }) {
    const navigate = useNavigate();
    const location = useLocation();
    const { logout } = useAuth();
    const isActive = (path) => location.pathname === path;

    return (
        <>
            <div id="navbar">
                <div id='container-nav'>
                    <div id='brand'>
                        <p>My Organizer</p>
                    </div>
                    <div className='contents-nav-buttons'>
                        <button
                            onClick={() => { navigate('/home') }}
                            className={`nav-button ${isActive('/home') ? 'active' : ''}`}
                        >
                            Home
                        </button>
                        <button
                            onClick={() => { navigate('/usuarios') }}
                            className={`nav-button ${isActive('/usuarios') ? 'active' : ''}`}
                        >
                            Users
                        </button>
                    </div>
                    <div className="logout-button">
                        <button
                            onClick={logout}
                            className="drop-down-toggle"
                        >
                            <LogOut size={40} style={{ color: "black" }} />
                        </button>
                    </div>
                </div>
            </div>
            {children}
        </>
    )
}