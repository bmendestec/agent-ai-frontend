import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { NavBar } from "../components/common/layouts/NavBar";
import { useState } from "react";

const ProtectedRoute = ({ children }) => {

    const { loading } = useAuth();
    const getCurrentUser = localStorage.getItem('idUser');
    const [isOpen, setIsOpen] = useState(false);

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
        <div className={`navbar-container ${!isOpen ? "uncollapsed" : "collapsed"}`}>
            <NavBar isOpen={isOpen} setIsOpen={setIsOpen}> {children} </NavBar>
        </div>
    )
}

export default ProtectedRoute;