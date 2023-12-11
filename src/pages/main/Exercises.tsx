import { Link, Outlet } from 'react-router-dom';
import '../../styles/pages/Exercises.css';

const Exercises = () => {
    return (
        <div className='exercises'>
            <div>
                <div>Exercises</div>
                <nav>
                    <Link to="/exercises/backtracking" className="link"><button>BackTracking</button></Link>
                    <Link to="/exercises/graphs" className="link"><button>Grpahs</button></Link>
                    <Link to="/exercises/trees" className="link"><button>Trees</button></Link>
                </nav>
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default Exercises;