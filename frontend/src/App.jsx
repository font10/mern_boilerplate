import './App.css'
import { Routes, Route } from 'react-router-dom'
import { route } from './models/route.model'
import { Layout, ProtectedRoute } from './components'
import { SignUp, Home, Login, Dashboard } from './pages'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { user } = useSelector(state => state.auth)

  return (
    <>
      <Layout>
        <ToastContainer className="h-20" />
        <Routes>
          <Route element={<ProtectedRoute isAllowed={!!user} />} >
            <Route path={ route.dashboard.path } element={<Dashboard />} />
          </Route>
          <Route path={ route.auth.signup.path } element={<SignUp />} />
          <Route path={ route.root.path } exact element={<Home />} />
          <Route path={ route.auth.login.path } element={<Login />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
