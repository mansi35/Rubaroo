import './App.css';
import LeftSideNavbar from './components/LeftSidebar';
import RightSideNavbar from './components/RightSideNavbar';
import Feed from './components/Feed';
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
            <LeftSideNavbar />
            <Feed />
            <RightSideNavbar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
