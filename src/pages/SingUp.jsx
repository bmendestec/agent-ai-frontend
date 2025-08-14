import { useNavigate } from 'react-router-dom';
import { Button } from '../components/common/Button/Button.jsx';
import '../styles/Signup.css';
import { useSignup } from '../hooks/useSignup.js';
import { CircleCheckBig, MailCheck, MailX, OctagonX } from 'lucide-react';

export function SignUp() {
    const navigate = useNavigate();
    const { formData, handleInputChange, handleSubmit, emailInputRef } = useSignup();

    const isValidEmail = formData.email && /\S+@\S+\.\S+/.test(formData.email);
    const isSamePassword = formData.password === formData.confirmPassword;

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
                            <input
                                type="text"
                                name='fullName'
                                value={formData.fullName}
                                onChange={handleInputChange} required
                                placeholder="Full name" />
                        </div>
                        <div className='row'>
                            <label> Email {!isValidEmail ? <MailX size={20} /> : <MailCheck size={20} />}</label>
                            <input
                                type="text"
                                name="email"
                                ref={emailInputRef}
                                value={formData.email}
                                onChange={handleInputChange} required
                                placeholder="E-mail" />
                        </div>
                        <div className='col'>
                            <div className='row'>
                                <label> Password </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange} required/>
                            </div>
                            <div className='row'>
                                <label>Confirm password  {!isSamePassword ? <OctagonX size={20} /> : <CircleCheckBig size={20} />}</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange} required/>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='row'>
                                <label> Birth Date</label>
                                <input
                                    type="date"
                                    name="birth_date"
                                    value={formData.birth_date}
                                    onChange={handleInputChange} required/>
                            </div>
                            <div className='row'>
                                <label>Age</label>
                                <input
                                    type="text"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className='row'>
                            <label>Gender</label>
                            <select
                                type="text"
                                name="gender"
                                value={formData.gender || ''}
                                onChange={handleInputChange}
                                required>
                                <option value="">---</option>
                                <option value="Feminino">Female</option>
                                <option value="Masculino">Male</option>
                            </select>
                        </div>
                        <Button
                            variant='save-signup'
                            type='submit'>
                            Save
                        </Button>
                    </form>
                </div>
            </div>
            <div className="footer-initial">
                <p>Copyright</p>
            </div>
        </>
    )
}
