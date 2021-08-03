import "./App.css";
import Layout from "./components/Layout";
import TasKProvider from "./components/Providers/TasksProvider";
import TaskContainer from "./components/TaskContainer";

function App() {
  return (
    <div className="App">
      <Layout>
        <TasKProvider>
          <TaskContainer />
        </TasKProvider>
      </Layout>
    </div>
  );
}

export default App;
