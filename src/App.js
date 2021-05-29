import './App.css';
import PrivateRoute from './PrivateRoute.js';
import IndividualDashboard from "./pages/IndividualDashboard";
import MyChat from "./pages/MyChat";
import Library from "./pages/Library";
import OrganizationSearch from './pages/OrganizationSearch';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginHeader from './components/authentication/LoginHeader';
import RegisterHeader from './components/authentication/RegisterHeader';
import ForgotPassword from './components/authentication/ForgotPassword';
import { AuthProvider } from './contexts/AuthContext.js';
import Login from './pages/Login';
import Register from './pages/Register';
import UpdateProfile from './pages/UpdateProfile';
import OrganizationDashboard from './pages/OrganizationDashboard';
import Connect from './pages/Connect';
import VideoCall from './pages/VideoCall';
import MyChatEmpty from './components/chat/MyChatEmpty';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute path="/institutions" component={OrganizationSearch} />
            <PrivateRoute path="/dashboard" component={IndividualDashboard} />
            <PrivateRoute path="/organizationDashboard" component={OrganizationDashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <PrivateRoute path="/connect" component={Connect} />
            <PrivateRoute path="/library" component={Library} />
            <PrivateRoute path = "/videocall" component={VideoCall} />
            <PrivateRoute path="/chat/rooms/:roomId/:roomType" component={MyChat} />
          <PrivateRoute path="/chat" component={MyChatEmpty} />
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
