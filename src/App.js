import React, {useEffect, useState} from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import CardDetail from './components/cardDetail/CardDetail';
import Footer from './components/footer';
import NavBar from './components/NavBar';
import Dashboard from './pages/dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  const [user, setUser] = useState(null)
  const [card, setCard] = useState(null)

  useEffect(()=>{
    // auto-login
    fetch("https://mopay-production.up.railway.app/me", {
      method:'GET',
      headers: {
        "Access-Control-Allow-Origin":"no-cors",
        "Content-Type": "application/json"
      }
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  },[])



  console.log(card)
  return (
    <>
    <NavBar user={user} setUser={setUser} />
    <main>
      {user ? (
        <Routes>
          <Route path="/dashboard" element={<Dashboard user={user} name={user.username} setCard={setCard}/>}/>
          <Route path="/" element={<Dashboard user={user} name={user.username}/>}/>
          <Route path="/details" element={<CardDetail setUser={setUser} card={card} />}/>
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
