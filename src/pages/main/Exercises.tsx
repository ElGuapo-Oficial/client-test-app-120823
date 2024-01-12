import { Link, Outlet } from 'react-router-dom';
import '../../styles/pages/main/Exercises.css';

const Exercises = () => {
    return (
        <div className='exercises'>
            <nav>
                <Link to="/exercises/backtracking" className="link"><button>BackTracking</button></Link>
                <Link to="/exercises/graphs" className="link"><button>Grpahs</button></Link>
                <Link to="/exercises/trees" className="link"><button>Trees</button></Link>
            </nav>
            <div className="content">
                <p>Exercise</p>
                <Outlet />
            </div>
        </div>
    )
}

export default Exercises;