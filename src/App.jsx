import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'

import Register from './pages/Register'



function App () {


  return (
    <>
      <div className=' text-white h-[100vh] flex justify-center items-center bg-cover'>
      
    
        <Routes>
         
          <Route path='/login' element={<Login />} />
         
          <Route path='/register' element={<Register />} />
         
         
        </Routes>
        
      </div>

    </>
  )
}

export default App
