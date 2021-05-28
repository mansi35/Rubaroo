import './App.css';
import SideNavbar from './components/Sidebar';
import OrganizationSearch from './pages/OrganizationSearch';

function App() {
  return (
    <div className="app">
      <OrganizationSearch />
      <SideNavbar />
      
    </div>
  );
}

export default App;
