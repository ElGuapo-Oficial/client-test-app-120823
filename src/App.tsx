import './App.css';
import NavBar from './components/NavBar';
import AppRouter from './router/AppRouter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="main-app-container">
      <NavBar />
      <div className="main">
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
