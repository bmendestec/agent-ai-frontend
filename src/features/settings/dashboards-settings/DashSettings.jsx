import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/common/button";
import './DashSettings.css';

export default function DashSettings() {
    const navigate = useNavigate();
    const handleSubmit = () => {
        alert("Teste");
    }

    return (
        <>
            <div className="dash-settings-main">
                <form onSubmit={handleSubmit}>
                    <label>Dashboard name</label>
                    <input type="text" name="dashboardName" />
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