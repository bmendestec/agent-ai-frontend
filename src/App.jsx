import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import ProtectedRoute from './routes/ProtectedRoute';
import UsersList from './features/users/components/UsersList';
import { SignUp } from './pages/SingUp';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/usuarios' element={<ProtectedRoute><UsersList /></ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App
