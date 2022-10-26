import './App.css';
import {BrowserRouter , Routes , Route ,Navigate} from "react-router-dom"
import Index from './components/Index';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin';
import { useEffect, useState } from 'react';

function App() {

  const [id,setId] = useState(localStorage.getItem('id'))
  const [admin,setAdmin] = useState(localStorage.getItem('admin'))
  useEffect(()=>{
    if(localStorage.getItem('id')){
      setId(localStorage.getItem('id'))
      setAdmin(localStorage.getItem('admin'))
    }else{
      setId('')
      setAdmin("")
    }
  },[])

  return (

      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/login' element={id ? <Navigate to="/"/> : <Login /> } />
            <Route path='/register' element={id ? <Navigate to="/"/> :<Register />} />
            <Route path='/admin' element={admin === "true" ? <Admin /> : <Navigate to="/"/>} />
          </Routes>
      </BrowserRouter>

  );
}

export default App;
