
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Additems from './pages/Additems'
import { Toaster } from 'react-hot-toast';


function App() {
  

  return (
    <>
        <Toaster position="top-right" reverseOrder={false} />
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/items' element={<Additems/>} />
      </Routes>
    </>
  )
}

export default App
