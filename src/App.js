
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
import Analytics from './components/Analytics';
import Alert from './components/Alert';
import { useContext,useEffect } from 'react';
import AppContext from './ContextStates/AppContext';

function App() {

  const {alert,setisLogin} = useContext(AppContext)

  useEffect(() => {
      
    if(localStorage.getItem('jwt_token')!==null)setisLogin({
      iS:true,
      username:localStorage.getItem('username')
    })

    // eslint-disable-next-line
  }, [])


  return (
    <div>
        <Router>
          <NavBar/>
          <Alert type={alert.type} message={alert.message}/>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<Register />}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/overview" element={<Analytics/>}/>
          </Routes>

          
          <Footer/>
        </Router>
      
      
    </div>
  );
}

export default App;
