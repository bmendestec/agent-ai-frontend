import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import ProtectedRoute from './routes/ProtectedRoute';
import UsersList from './features/users/components/UsersList';
import { SignUp } from './pages/SingUp';
import Integrations from './features/integrations-center/components/Integrations';
import UserEdit from './features/users/components/UserEdit';
import Dashboards from './pages/Dashboards';
import NewUser from './features/users/components/UserNew';
import Settings from './features/settings/Settings';
import General from './features/settings/general-settings/General';
import DashSettings from './features/settings/dashboards-settings/DashSettings';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/dashboard' element={<ProtectedRoute><Dashboards /></ProtectedRoute>} />
        <Route path='/integrations' element={<ProtectedRoute><Integrations /></ProtectedRoute>} />
        <Route path='/usuarios' element={<ProtectedRoute><UsersList /></ProtectedRoute>} />
        <Route path='/new-user' element={<ProtectedRoute><NewUser /></ProtectedRoute>} />
        <Route path='/edit-user' element={<ProtectedRoute><UserEdit /></ProtectedRoute>} />
        <Route path='/settings' element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route path='/settings-general' element={<ProtectedRoute><Settings><General /></Settings></ProtectedRoute>} />
        <Route path='/settings-dashboards' element={<ProtectedRoute><Settings><DashSettings /></Settings></ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App
