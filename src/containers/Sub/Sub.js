import React from "react";
import HorizontalScroll from "react-scroll-horizontal";

export default class Sub extends React.Component {
	state = {
		useScroll: true
	};
	scroll = () => {
		if (this.state.useScroll) {
			window.scrollBy(0, 1000);
			this.setState({
				useScroll: false
			});
		} else {
			this.setState({
				useScroll: true
			});
		}
	};
	render() {
		const child = { width: `500px`, height: `100%`, backgroundColor: "red" };
		const child2 = {
			width: `500px`,
			height: `100%`,
			backgroundColor: "green"
		};
		const parent = { width: `1000px`, height: `1000px` };
		return (
			<div>
				<div style={parent} onScroll={this.scroll}>
					<HorizontalScroll reverseScroll pageLock>
						<div style={child} />
						<div style={child2} />
						<div style={child} />
						<div style={child2} />
						<div style={child} />
						<div style={child2} />
						<div style={child} />
						<div style={child2} />
						<div style={child} />
						<div style={child2} />
						<div style={child} />
						<div style={child2} onMouseOver={this.scroll} />
					</HorizontalScroll>
					<div
						style={{
							backgroundColor: "gray",
							width: "1000px",
							height: "1000px"
						}}
					/>
					<div
						style={{
							backgroundColor: "blue",
							width: "1000px",
							height: "1000px"
						}}
					/>
				</div>
			</div>
		);
	}
}
