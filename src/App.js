import './App.css';
import LeftSideNavbar from './components/Navbar';
import RightSideNavbar from './components/Chats';
import Feed from './components/Feed';
import OrganizationSearch from './pages/OrganizationSearch';

function App() {
  return (
    <div className="app">
      <OrganizationSearch />
      <LeftSideNavbar />
      <Feed />
      <RightSideNavbar />
    </div>
  );
}

export default App;
