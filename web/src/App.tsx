import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { AccountCreation } from './pages/AccountCreation';
import { Login } from './pages/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/accountCreation" Component={AccountCreation} />
        <Route path="/login" Component={Login} />
      </Routes>
    </Router>
  );
};

export default App;
