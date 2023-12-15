import { Routes, Route } from 'react-router-dom';
import Home from '../components/pages/main/Home';
import Exercises from '../components/pages/main/Exercises';
import Projects from '../components/pages/main/Projects';
import Login from '../components/pages/main/Login';
import Signup from '../components/pages/main/Signup';
import BackTracking from '../components/pages/exercises/BackTracking';
import Trees from '../components/pages/exercises/Trees';
import Graphs from '../components/pages/exercises/Graphs';
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