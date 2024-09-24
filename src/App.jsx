import Sidebar from './components/sidebar/SideBar';
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const pathname = useLocation().pathname;
  console.log(pathname)
  return (
    <div >
      {
        pathname !== '/login' ? (
          <header style={{ display: "flex" }} >
            <Sidebar />
            <div style={{ marginLeft: "76px", width: "100%" }}>
              <Outlet />
            </div>
          </header>
        ) : (
          <Outlet />
        )
      }     
    </div>
  );
}

export default App;


