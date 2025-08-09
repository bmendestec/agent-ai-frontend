import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { NavBar } from "../components/NavBar";

const ProtectedRoute = ({ children }) => {

    const { loading } = useAuth();
    const getCurrentUser = localStorage.getItem('idUser');

    if (loading) {
        return (
            <div>
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }
    if (!getCurrentUser) {
        return <Navigate to="/" />;
    }

    return (
        <div className="navbar-container">
            <NavBar> {children} </NavBar>
        </div>
    )
}

export default ProtectedRoute;