import { useEffect, useState } from "react";
import { useUsers } from "../hooks/useUsers";
import { Edit2, PlusCircleIcon, Trash2 } from "lucide-react";
import './UsersList.css';
import { useNavigate } from "react-router-dom";
import timezone from "timezone";
import { Button } from "../../../components/common/button";

export default function UsersList() {
    const { fetchUserData, handleDeleteUser, formatDate, loading } = useUsers();
    const [users, setUsers] = useState([]);
    const [reloadPanel, setReloadPanel] = useState(null);
    const navigate = useNavigate();

    const fetchUsers = async () => {
        const data = await fetchUserData();
        setUsers(data);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        if (!reloadPanel) return;
        setReloadPanel(false);
        fetchUsers();
    }, [reloadPanel]);

    const handleEdit = (id) => {
        if (!id) return;
        navigate('/edit-user', { state: { userId: id } });
    }

    return (
        <>
            <div className='title'>
                <h1>Users list</h1>
                <Button
                    onClick={() => {navigate('/new-user')}}
                    variant="handle-bar-add">
                    <h3>Add user</h3>
                    <PlusCircleIcon />
                </Button>
            </div>
            {loading ? (
                <span className="visually-hidden">Loading...</span>
            ) :
                <div className="list-container">
                    <table hover>
                        <thead>
                            <tr>
                                <th style={{ width: '20%', textAlign: 'center' }}> Name </th>
                                <th style={{ width: '10%', textAlign: 'center' }}> Age </th>
                                <th style={{ width: '10%', textAlign: 'center' }}> Birth date </th>
                                <th style={{ width: '10%', textAlign: 'center' }}> Gender </th>
                                <th style={{ width: '10%', textAlign: 'center' }}> Email </th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {                            
                            users.map((user) => (
                                <tr key={user.id}
                                    onDoubleClick={() => { handleEdit(user.id) }}
                                >
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{formatDate(timezone(timezone(new Date(user.birth_date),'America/Sao_Paulo'),'America/Sao_Paulo','%Y/%m/%d'))}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.email}</td>
                                    <td>

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleEdit(user.id)
                                            }}>
                                            <Edit2 />
                                        </button>
                                    </td>
                                    <td>

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleDeleteUser(user.id, setReloadPanel);
                                            }}>
                                            <Trash2 />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </ table>
                </div>
            }
        </>
    )
}