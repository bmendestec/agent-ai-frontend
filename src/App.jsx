import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import ProtectedRoute from './routes/ProtectedRoute';
import UsersList from './features/users/components/UsersList';
import { SignUp } from './pages/SingUp';
import Integrations from './features/integrations-center/components/Integrations';
import UserEdit from './features/users/components/UserEdit';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/dashboard' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/integrations' element={<ProtectedRoute><Integrations /></ProtectedRoute>} />
        <Route path='/usuarios' element={<ProtectedRoute><UsersList /></ProtectedRoute>} />
        <Route path='/edit-user' element={<ProtectedRoute><UserEdit /></ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App
