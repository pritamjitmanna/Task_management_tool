
import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import ContextStates from './ContextStates/AppContextStates';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';

function App() {
  return (
    <div>
      <ContextStates>
        <Router>
          <NavBar/>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<Register />}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/overview" element={<Analytics/>}/>
          </Routes>

          
          <Footer/>
        </Router>
      </ContextStates>
      
      
    </div>
  );
}

export default App;
