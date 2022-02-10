import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Alert from "./Components/Alert";
import "./styles/style.css";

import Movies from "./Components/Movies/Movies";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Alert />
        <Switch>
          <Route exact path="/" component={Movies}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
