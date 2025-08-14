import Card from '../components/common/Card/Card';
import '../styles/Dashboards.css';
import { useUsers } from '../features/users/hooks/useUsers';
import { useEffect, useState } from 'react';
import timezone from 'timezone';
import { useNavigate } from 'react-router-dom';

export default function Dashboards() {
    const [users, setUsers] = useState([]);
    const { fetchUserData, formatDate } = useUsers();
    const navigate = useNavigate();

    const handleEdit = (id) => {
        if (!id) return;
        navigate('/edit-user', { state: { userId: id } });
    }

    const fetchUsers = async () => {
        const data = await fetchUserData();
        setUsers(data);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const mockDashboards = [
        { name: 'Main' },
        // { name: 'Secondary' },
    ]

    return (
        <>
            <div className="title">
                <h1>Dashboards!</h1>
            </div>
            <div className="main-dash-container">
                {mockDashboards.map((dash) => (
                    <div className="dash-cards">
                        <h2>{dash.name}</h2>
                        <div className="main-card">
                            {users.map((user) => (
                                <Card title={user.name}
                                    onDoubleClick={() => { handleEdit(user.id) }}>
                                    <div className="card-label">
                                        <label>Email: </label>
                                    </div>
                                    <div className="card-info">
                                        <p>{user.email}</p>
                                    </div>
                                    <div className="card-label">
                                        <label>Birth date: </label>
                                    </div>
                                    <div className="card-info">
                                        <p>{formatDate(timezone(timezone(new Date(user.birth_date), 'America/Sao_Paulo'), 'America/Sao_Paulo', '%Y/%m/%d'))}</p>
                                    </div>
                                    <div className="card-label">
                                        <label>Age: </label>
                                    </div>
                                    <div className="card-info">
                                        <p>{user.age}</p>
                                    </div>
                                    <div className="card-label">
                                        <label>Gender: </label>
                                    </div>
                                    <div className="card-info">
                                        <p>{user.gender}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}