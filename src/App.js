import React, {useEffect, useState} from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './components/footer';
import NavBar from './components/NavBar';
import Dashboard from './pages/dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  const [user, setUser] = useState(null)

  useEffect(()=>{
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  },[])

  return (
    <>
    <NavBar user={user} setUser={setUser} />
    <main>
      {user ? (
        <Routes>
          <Route path="/dashboard" element={<Dashboard user={user} name={user.username}/>}/>
        </Routes>
      ) : (
        <Routes>
          <Route path="/signup" element={<SignUp setUser={setUser} />}/>
          <Route path="/login" element={<Login setUser={setUser} />}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard user={user}/>}/>
        </Routes>
      )}
    </main>
    <Footer/>
  </>
  );
}

export default App;
