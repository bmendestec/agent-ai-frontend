import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../../services/server";
import timezone from "timezone";

export function useUsers() {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        fullName: '',
        birth_date: '',
        age: '',
        gender: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === 'birth_date') {
            const birth_date = new Date(value);
            const today = new Date();
            const age = today.getFullYear() - birth_date.getFullYear();
            const monthDiff = today.getMonth() - birth_date.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth_date.getDate())) {
                setFormData({ ...formData, birth_date: value, age: age - 1 });
            } else {
                setFormData({ ...formData, birth_date: value, age });
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        } else if (formData.password !== formData.confirmPassword) {
            alert('As senhas não coincidem.');
            return;
        } else if (!formData.fullName) {
            alert('Por favor, preencha o nome completo.');
            return;
        } else {
            const date = new Date(formData.birth_date);
            const zoned = timezone(date, 'America/Sao_Paulo');
            const birthDate = formatDate(timezone(zoned, 'America/Sao_Paulo', '%Y/%m/%d'));
            await addUser(
                formData.fullName,
                birthDate,
                formData.age,
                formData.gender,
                formData.email,
                formData.password
            );
        }
    };

    async function addUser(fullName, birth_date, age, gender, email, password) {
        try {
            const userData = {
                name: fullName,
                birth_date: birth_date,
                age: age,
                gender: gender,
                email: email,
                password: password,
                active: 'S',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
                created_by: 'user',
                updated_by: 'user'
            };
            await apiClient.post("/usuarios", userData).then((response) => {
                if (response.status !== 201) {
                    alert('Erro ao cadastrar usuário. Tente novamente mais tarde.');
                    return;
                } else {
                    navigate('/usuarios');
                    return response.data;
                }
            });
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Este e-mail já está em uso. Tente outro.');
            }
        }
    }

    const fetchUserData = async () => {
        try {
            const userStored = localStorage.getItem('idUser');
            const tokenStored = localStorage.getItem('authToken');
            if (!userStored && !tokenStored) {
                setLoading(false);
                navigate('/login');
            } else {
                const findUserName = await apiClient.get('/usuarios', {
                    headers: {
                        Authorization: `Bearer ${tokenStored}`,
                    }
                });
                if (findUserName.status !== 200) {
                    console.log('Erro ao buscar usuário:', findUserName.message);
                    return;
                } else {
                    setLoading(false);
                    setUser(findUserName.data);
                    return findUserName.data;
                }
            }
        } catch (error) {
            console.log('Erro ao buscar usuário:', error.message);
            return null;
        }
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const handleDeleteUser = (id, setReloadPanel) => {
        if (id) {
            apiClient.delete(`/usuarios/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
                }
            }).then(() => {
                setUser(user.filter((user) => user.id !== id));
                setReloadPanel(true);
            }).catch((error) => {
                console.log('Erro ao deletar usuário:', error.message);
            })
        }
    }

    const handleDirectToEdit = (id) => {
        if (id) {
            navigate('/edit-user', { state: { userId: id } });
        }
    }


    return {
        setFormData,
        formatDate,
        setUser,
        fetchUserData,
        handleDeleteUser,
        handleDirectToEdit,
        handleChange,
        handleSubmit,
        formData,
        user,
        loading
    };

}