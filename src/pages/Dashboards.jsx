import Card from '../components/common/Card/Card';
import '../styles/Dashboards.css';
import { useUsers } from '../features/users/hooks/useUsers';
import { useEffect, useState } from 'react';

export default function Dashboards() {
    const [users, setUsers] = useState([]);
    const { fetchUserData } = useUsers();

    const fetchUsers = async () => {
        const data = await fetchUserData();
        setUsers(data);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            <div className="title">
                <h1>Dashboards!</h1>
            </div>
            <h2>Main Dash</h2>
            <div className="main-dash-container">
                <div className="main-card">
                    {users.map((user) => (
                        <Card title={user.name}>
                            <p>Email: {user.email}</p>
                            <p>Age: {user.age}</p>
                            <p>Gender: {user.gender}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    )
}