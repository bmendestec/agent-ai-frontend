import { useNavigate } from 'react-router-dom';
import { Button } from '../components/common/button/button';
import '../styles/Signup.css';

export function SignUp() {

    const navigate = useNavigate();
    const handleSubmit = () => {
        alert('Teste');
    }

    return (
        <>
            <div className="header-initial">
                <img className="logo-header" src="src/assets/sciencebot_logo.png" alt="" />
                <button className="login-header-button" onClick={() => { navigate('/') }}>
                    Sign In
                </button>
            </div>
            <div className="signup-container">
                <div className="signup-title">
                    <h1>Sign up!</h1>
                </div>
                <div className="signup-form">
                    <form onSubmit={handleSubmit}>
                        <div className='row'>
                            <label> Name </label>
                            <input type="text" name="name" placeholder="Full name" />
                        </div>
                        <div className='row'>
                            <label> Email </label>
                            <input type="text" name="email" placeholder="E-mail" />
                        </div>
                        <div className='col'>
                            <div className='row'>
                                <label> Birth Date</label>
                                <input type="date" name="birth_date" />
                            </div>
                            <div className='row'>
                                <label>Age</label>
                                <input type="text" name="age" />
                            </div>
                        </div>
                        <div className='row'>
                            <label>Gender</label>
                            <select type="date" name="birth_date">
                                <option value="---">---</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                            </select>
                        </div>
                        <Button type='submit'>Save</Button>
                    </form>
                </div>
            </div>
            <div className="footer-initial">
                <p>Copyright</p>
            </div>
        </>
    )
}