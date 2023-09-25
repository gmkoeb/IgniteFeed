import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { AccountCreation } from './pages/AccountCreation';
import { Login } from './pages/Login';
import { useContext } from 'react';
import { AuthContext } from './context/authentication';

const App = () => {
  const authContext = useContext(AuthContext)

  return (
    <Router>
      { authContext.isAuthenticated() && 
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      }
      {!authContext.isAuthenticated() && 
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/accountCreation" Component={AccountCreation} />
        </Routes>
      }
    </Router>
  );
};

export default App;
