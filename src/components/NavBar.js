import { Link } from "react-router-dom";
import { Avatar, Badge } from "rsuite";
import logo from '../img/mopay.png'
import '../css/style.css'
import Container from "./container";

export default function NavBar({ user, setUser }) {
    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
    }
  
    return (
        <header className="header">
        <div>
          <Link to="/"><img src={logo} style={{height:40}}/></Link>
        </div>
        <div>
          {user ? (
            <>
            
            <button onClick={handleLogoutClick} className="btn">Logout</button>
            <Badge content="20" >
              <Avatar circle src="https://avatars.githubusercontent.com/u/8225666" alt="@SevenOutman" />
            </Badge>
           
            </>
          ) : (
            <>
              <Link to="/login"><button className="btn">My Account</button></Link>
            </>
          )}
        </div>
      </header>
    );
  }