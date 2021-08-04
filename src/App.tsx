import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import Routes from "./components/Routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL + "/"}>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
