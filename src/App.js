import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from "react-router-dom";
import Main from "./containers/Main";
import Life from "./containers/Life";

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
							<Route exact path="/main/" component={Main} />
							<Route exact path="/life/" component={Life} />
							<Redirect to="/main" />
					</Switch>
				</div>
			</Router>
		);
	}
}
