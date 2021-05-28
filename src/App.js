import './App.css';
import IndividualDashboard from "./pages/IndividualDashboard";
import OrganizationSearch from './pages/OrganizationSearch';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/institutions">
            <OrganizationSearch />
          </Route>
          <Route path="/dashboard">
            <IndividualDashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
