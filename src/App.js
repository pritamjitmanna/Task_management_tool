
import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        {/* <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
        </Routes> */}
        <Dashboard/>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
