import "./App.css";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </>
  );
}

export default App;
