import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../../components/common/button";
import { useEdit } from "../hooks/useEdit";
import './UserEdit.css';
import timezone from "timezone";


export default function UserEdit() {
    const location = useLocation();
    const userId = location.state?.userId || null;
    const { handleSubmit, handleChange, formatDate, formData } = useEdit({ userId });
    const isValidEmail = formData.email && /\S+@\S+\.\S+/.test(formData.email);
    const date = new Date(formData.birth_date);
    const zoned = timezone(date, 'America/Sao_Paulo');
    const birthDate = formatDate(timezone(zoned, 'America/Sao_Paulo', '%Y/%m/%d'));
    const navigate = useNavigate();

    return (
        <>
            <div className="title">
                <h1>User edit</h1>
            </div>
            <div className="user-edit-form">
                <form onSubmit={handleSubmit}>
                    <div className='row'>
                        <label> Name </label>
                        <input
                            type="text"
                            name='name'
                            value={formData.name}
                            onChange={handleChange} required
                            placeholder="Full name" />
                    </div>
                    <div className='row'>
                        <label> Email </label>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="E-mail" />
                    </div>
                    {!isValidEmail && formData.email && (
                        <span className="error-message">Email inválido</span>
                    )}
                    <div className='col'>
                        <div className='row'>
                            <label> Birth Date</label>
                            <input
                                type="date"
                                name="birth_date"
                                value={birthDate}
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
                            onClick={() => {navigate('/usuarios')}}>
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>
        </>
    )
}