import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Courses from './Components/Courses';
import Home from './Components/Home';
import Course from './Components/Course';
import { useEffect, useState } from 'react';
import Logout from './Components/Logout';

export default function App() {

  useEffect(() => {
    let tokenfFromStorage = localStorage.getItem('token');
    setToken(tokenfFromStorage)
  }, [])
  const [token, setToken] = useState(null)


  return (
    <BrowserRouter>
      <nav  className="navbar bg-base-100 h-[10vh]">
        <div className="flex-1">
          <h1 className="btn btn-ghost text-xl">CINK</h1>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {token && <li><Link to={'/'}>Home</Link></li>}
            {!token && <li><Link to={'/login'}>Login</Link></li>}
            {!token && <li><Link to={'/signup'}>Signup</Link></li>}
            {token && <li><Link to={'/courses'}>Courses</Link></li>}
            {token && <li><Link to={'/logout'}>logout</Link></li>}
          </ul>
        </div>
      </nav>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/courses' element={<Courses />}/>
          <Route path='/logout' element={<Logout />}/>
          <Route path={'/courses/:id'} element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
}
