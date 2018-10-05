import React from "react";
import TodoList from "../../components/TodoList";
import If from "../../components/If"
export default class Main extends React.Component {
	state = {
	}

	change = (value) => {
		this.setState({
			Statevalue: value
		})

	}
	render() {

		return (

			<main>
				<If condition={true}>
					<TodoList/>
				</If>

			</main>

		);
	}
}
