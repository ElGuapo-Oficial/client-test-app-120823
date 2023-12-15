import { Link } from 'react-router-dom';
import { isAuthenticated } from '../lib/authentication';
import '../styles/components/NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <div className="main-nav">
                <div className="nav-links">
                    <Link to="/" className="link"><button>Home</button></Link>
                    { isAuthenticated() && <Link to="/exercises" className="link"><button>Exercises</button></Link> }
                    { isAuthenticated() && <Link to="/projects" className="link"><button>Projects</button></Link> }
                </div>
                <Link to="/login" className="link signup-link"><button>Login</button></Link>
            </div>
        </nav>
    )
}

export default NavBar;