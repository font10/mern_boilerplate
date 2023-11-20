import './App.css'
import { Routes, Route } from 'react-router-dom'
import { route } from './models/route.model'
import { Layout } from './components'
import { SignUp, Home, Login } from './pages'

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path={ route.auth.signup.path } element={<SignUp />} />
          <Route path={ route.root.path } exact element={<Home />} />
          <Route path={ route.auth.login.path } element={<Login />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
