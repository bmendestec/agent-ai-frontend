import { useState } from 'react';
import '../styles/Login.css'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
    const { login, loading } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    }

    return (
        <>
            <div className="header-initial">
                <img className="logo-header" src="src/assets/sciencebot_logo.png" alt="" />
                <button className="login-header-button" onClick={() => { navigate('/sign-up') }}>
                    Free trial
                </button>
            </div>
            <div className="login-container">
                <div className='login-form'>
                    <h2>
                        Welcome to your Agent AI
                    </h2>
                    <form action="submit" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='E-mail'
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password'
                        />
                        <button
                            type='submit'
                            className='login-button'
                            disabled={loading}
                        >
                            {loading
                                ? <span className="visually-hidden">Loading...</span>
                                : 'Sign In'
                            }
                        </button>
                    </form>
                </div>
            </div>
            <div className="footer-initial">
                <p>Copyright</p>
            </div>
        </>
    )
} 