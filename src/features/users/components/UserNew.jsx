import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/common/button"
import { useUsers } from "../hooks/useUsers";
import './UserNew.css';
import { CircleCheckBig, MailCheck, MailX, OctagonX } from "lucide-react";

export default function NewUser() {
    const { handleSubmit, handleChange, formData } = useUsers();
    const isValidEmail = formData.email && /\S+@\S+\.\S+/.test(formData.email);
    const isSamePassword = formData.password === formData.confirmPassword;
    const navigate = useNavigate();

    return (
        <>
            <div className="title">
                <h1>New user</h1>
            </div>
            <div className="new-user-form">
                <form onSubmit={handleSubmit}>
                    <div className='row'>
                        <label> Name </label>
                        <input
                            type="text"
                            name='fullName'
                            value={formData.fullName}
                            onChange={handleChange} required
                            placeholder="Full name" />
                    </div>
                    <div className='row'>
                        <label> Email {!isValidEmail ? <MailX /> : <MailCheck />} </label>
                        <input
                            className={`${!isValidEmail ? "invalid-email" : "avalid-email"}`}
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="E-mail" />
                    </div>
                    <div className='col'>
                        <div className='row'>
                            <label> Password </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange} />
                        </div>
                        <div className='row'>
                            <label> Confirm Password {!isSamePassword ? <OctagonX /> : <CircleCheckBig />}</label>
                            <input
                                className={`${!isSamePassword ? "pass-not-same" : "pass-same"}`}
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange} />
                        </div>
                    </div>
                    <div className='col'>
                        <div className='row'>
                            <label> Birth Date</label>
                            <input
                                type="date"
                                name="birth_date"
                                value={formData.birth_date}
                                onChange={handleChange} />
                        </div>
                        <div className='row'>
                            <label>Age</label>
                            <input
                                type="text"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                readOnly />
                        </div>
                    </div>
                    <div className='row'>
                        <label>Gender</label>
                        <select
                            type="text"
                            name="gender"
                            value={formData.gender || ''}
                            onChange={handleChange}>
                            <option value="---">---</option>
                            <option value="Feminino">Female</option>
                            <option value="Masculino">Male</option>
                        </select>
                    </div>
                    <div className="buttons-deck">
                        <Button
                            type='submit'
                            variant="save">
                            Save
                        </Button>
                        <Button
                            type='cancel'
                            variant="cancel"
                            onClick={() => { navigate('/usuarios') }}>
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>
        </>
    )
}