import React from "react";
import PropTypes from "prop-types";

export default class If extends React.Component {
	static propTypes = {
		condition: PropTypes.any
	};

	render() {
		if (this.props.condition) {
			return this.props.children;
		} else {
			return null;
		}
	}
}
