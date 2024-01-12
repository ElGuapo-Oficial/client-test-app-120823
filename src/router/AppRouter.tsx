import { Routes, Route } from 'react-router-dom';
import Home from '../pages/main/Home';
import Exercises from '../pages/main/Exercises';
import Projects from '../pages/main/Projects';
import Login from '../pages/main/Login';
import Signup from '../pages/main/Signup';
import BackTracking from '../pages/exercises/BackTracking';
import Trees from '../pages/exercises/Trees';
import Graphs from '../pages/exercises/Graphs';
import ProtectedRoute from '../components/ProtectedRoute';

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute />}>
            <Route path="/exercises" element={<Exercises />} >
                <Route path="backtracking" element={<BackTracking />} />
                <Route path="graphs" element={<Graphs />} />
                <Route path="trees" element={<Trees />} />
            </Route>
            <Route path="/projects" element={<Projects />} />
        </Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/signup" element={<Signup />} ></Route>
    </Routes>
  );
};

export default AppRouter;