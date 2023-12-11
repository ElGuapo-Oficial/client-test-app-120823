import { Link } from 'react-router-dom';
import '../styles/components/NavBar.css';

const NavBar = () => {
    return (
        <nav className="main-nav">
            <Link to="/" className="link"><button>Home</button></Link>
            <Link to="/exercises" className="link"><button>Exercises</button></Link>
            <Link to="/projects" className="link"><button>Projects</button></Link>
        </nav>
    )
}

export default NavBar;