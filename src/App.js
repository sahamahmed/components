import BarChartComponent from './components/shared/components/graph/Graph';
import Sidebar from './components/sidebar/SideBar';
import Test from './components/Testing';
import ViewWorkFlow from './components/view/ViewWorkFlow';
import WorkflowList from './components/WorkflowList';


function App() {
  return (
    <div >
      <header style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ marginLeft: "76px", width: "100%" }}>
          <WorkflowList />
          <ViewWorkFlow />
        </div>
      </header>
    </div>
  );
}

export default App;
