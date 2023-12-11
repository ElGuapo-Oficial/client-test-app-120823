import { Link } from 'react-router-dom';
import '../styles/components/NavBar.css';

const NavBar = () => {
    return (
        <nav className="main-nav">
            <button><Link to="/" className="link">Home</Link></button>
            <button><Link to="/exercises" className="link">Exercises</Link></button>
            <button><Link to="/projects" className="link">Projects</Link></button>
        </nav>
    )
}

export default NavBar;