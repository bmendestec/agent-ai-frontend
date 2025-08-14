import { useNavigate } from 'react-router-dom';
import './General.css';
import { Button } from '../../../components/common/button';

export default function General() {
    const navigate = useNavigate();
    const handleSubmit = () => {
        alert("Teste");
    }

    return (
        <>
            <div className="general-main-container">
                <form onSubmit={handleSubmit}>
                    <label>Integration name</label>
                    <input type="text" name="integrationName" />
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