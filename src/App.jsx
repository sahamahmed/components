import Sidebar from './components/sidebar/SideBar';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div >
      <header style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ marginLeft: "76px", width: "100%" }}>
          <Outlet />
        </div>
      </header>
    </div>
  );
}

export default App;


