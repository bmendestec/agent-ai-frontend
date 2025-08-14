import { useNavigate } from "react-router-dom";
import { Button } from "../../components/common/button";
import './Settings.css';

export default function Settings({ children }) {
    const navigate = useNavigate();
    const isActive = (path) => location.pathname === path;

    return (
        <>
            <div className="title">
                <h1>Settings</h1>
            </div>
            <div className="nav-tab-header">
                <Button
                    variant="nav-tab"
                    onClick={() => { navigate('/settings-general') }}
                    isActive={isActive('/settings-general')}>
                    General settings
                </Button>
            </div>
            {children}
        </>
    )
}