import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Game from "./game";
import App from "./App";

const CustomRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/game" component={Game} />
                <Route path="/" component={App} />
            </Switch>
        </Router>
    );
};

export default CustomRoutes;
