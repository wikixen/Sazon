
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Landing from './pages/Landing'
import SignUp from './pages/SignUp'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/signup' element={<SignUp />} />
        <Route path='*' element={<h1 className='text-center text-4xl pt-4'>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
