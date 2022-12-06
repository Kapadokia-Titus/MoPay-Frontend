import { Link } from "react-router-dom";
import '../css/style.css'

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
          <Link to="/">Home</Link>
        </div>
        <div>
          {user ? (
            <button onClick={handleLogoutClick}><button className="btn">Logout</button></button>
          ) : (
            <>
              <Link to="/login"><button className="btn">My Account</button></Link>
            </>
          )}
        </div>
      </header>
    );
  }