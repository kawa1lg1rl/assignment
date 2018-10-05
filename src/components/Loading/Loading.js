import React from "react";
import PropTypes from "prop-types";

import If from "../If";
import "./Loading.css";
export default class Loading extends React.Component {
	static propTypes = {
		isLoading: PropTypes.bool,
		children: PropTypes.node
	};

	render() {
		return (
			<div>
				{this.props.children}
				<If condition={this.props.isLoading}>
					<div className="loading-spiner-wrapper">
						<div className="loading-spiner" />
					</div>
				</If>
			</div>
		);
	}
}
