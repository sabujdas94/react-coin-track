import * as React from "react";
import { observer } from "mobx-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
// CSS
import "./App.css";
import WelcomeStepTwo from "./pages/WelcomeStepTwo";
import WelcomeStepThree from "./pages/WelcomeStepThree";

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/signup'>
                    <Signup />
                </Route>
                <Route path='/welcomeStepThree'>
                    <WelcomeStepThree />
                </Route>
                <Route path='/welcomeStepTwo'>
                    <WelcomeStepTwo />
                </Route>
                <Route path='/welcome'>
                    <Welcome />
                </Route>
                <Route path='/overview'>
                    <Home />
                </Route>
                <Route path='/'>
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
}

export default observer(App);
