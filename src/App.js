import './App.css';
import PrivateRoute from './PrivateRoute.js';
import IndividualDashboard from "./pages/IndividualDashboard";
import Chat from "./pages/Chat";
import OrganizationSearch from './pages/OrganizationSearch';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginHeader from './components/authentication/LoginHeader';
import RegisterHeader from './components/authentication/RegisterHeader';
import ForgotPassword from './components/authentication/ForgotPassword';
import { AuthProvider } from './contexts/AuthContext.js';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="app">
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute path="/institutions" component={OrganizationSearch} />
            <PrivateRoute path="/dashboard" component={IndividualDashboard} />
            <PrivateRoute path="/chats" component={Chat} />
            <Route path="/login">
              <LoginHeader />
              <Login />
            </Route>
            <Route path="/register">
              <RegisterHeader />
              <Register />
            </Route>
            <Route path="/forgot-password">
              <ForgotPassword />
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
