import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../customHooks/useAuth';
import '../styles/components/NavBar.css';

const NavBar = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); // Clears the authentication state
        navigate('/'); // Optionally navigate to the home page
    };

    return (
        <nav>
            <div className="main-nav">
                <div className="nav-links">
                    { isAuthenticated && <Link to="/" className="link"><button>Home</button></Link> }
                    { isAuthenticated && <Link to="/exercises" className="link"><button>Exercises</button></Link> }
                    { isAuthenticated && <Link to="/projects" className="link"><button>Projects</button></Link> }
                </div>
                { isAuthenticated 
                    ? <button onClick={handleLogout}>Logout</button>
                    : <Link to="/login" className="link signup-link"><button>Login</button></Link>
                }
            </div>
        </nav>
    )
}

export default NavBar;