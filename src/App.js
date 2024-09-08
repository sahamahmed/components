import Sidebar from './components/sidebar/SideBar';
import Test from './components/Testing';

function App() {
  return (
    <div >
      <header style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ marginLeft: "76px", width: "100%" }}>
          <Test />
        </div>
      </header>
    </div>
  );
}

export default App;
