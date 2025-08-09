import { useEffect, useState } from "react";
import { useUsers } from "../hooks/useUsers";
import { Trash2 } from "lucide-react";

export default function UsersList() {
    const { fetchUserData, handleDeleteUser, loading } = useUsers();
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const data = await fetchUserData();
        setUsers(data);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            <div className='title'>
                <h2>Users list</h2>
            </div>
            {loading ? (
                <span className="visually-hidden">Loading...</span>
            ) :
                <div style={{ overflowY: "auto" }}>
                    <table hover>
                        <thead>
                            <tr>
                                <th style={{ width: '20%', textAlign: 'center' }}> Name </th>
                                <th style={{ width: '10%', textAlign: 'center' }}> Age </th>
                                <th style={{ width: '10%', textAlign: 'center' }}> Birth date </th>
                                <th style={{ width: '10%', textAlign: 'center' }}> Gender </th>
                                <th style={{ width: '10%', textAlign: 'center' }}> Email </th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}
                                    onDoubleClick={() => alert(`You've clicked on the ${user.id} user id`)}
                                >
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{new Date(user.birth_date).toLocaleDateString('pt-BR')}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.email}</td>
                                    <td>

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleDeleteUser(user.id)
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