
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import Home from './pages/Home'
import { useState } from 'react'

function App() {
  const [token, setToken] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={token ? <Home />:<Landing />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/signup' element={<SignUp />} />
        <Route path='*' element={<h1 className='text-center text-4xl pt-4'>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
