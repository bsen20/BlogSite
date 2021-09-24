import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/settings/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">
          <Route path="/login">{user ? <Home /> : <Login />}</Route>
        </Route>
        <Route exact path="/setting">
          {user ? <Setting /> : <Login />}
        </Route>
        <Route path="/write">{user ? <Write /> : <Login />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
      {/* <Home /> */}
      {/* <Single /> */}
      {/* <Write /> */}
      {/* <Setting /> */}
      {/* <Login /> */}
      {/* <Register /> */}
    </Router>
  );
}

export default App;
