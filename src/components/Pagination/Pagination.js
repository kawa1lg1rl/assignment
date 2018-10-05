import React from "react";
import PropTypes from "prop-types";
import If from "../If";
import cx from "classnames";

export default class Pagination extends React.Component {
	static propTypes = {
		totalPages: PropTypes.number,
		currentPage: PropTypes.number,
		changeCurrentPage: PropTypes.func
	};

	renderPageNumbers() {
		var array;
		if (this.props.totalPages < 6) {
			array = [...new Array(this.props.totalPages)];
		} else {
			array = [...new Array(5)];
		}
		var plus = 1;
		for (let i = 3; this.props.currentPage > i; i++) {
			if (this.props.totalPages > 2 + i) {
				++plus;
			}
		}
		return array.map((undef, index) => (
			<a
				className="pagination-number"
				key={index}
				onClick={() => {
					this.props.changeCurrentPage(index + plus);
				}}
				style={{ margin: 5 }}
			>
				{this.numberColer({ index, plus })}
			</a>
		));
	}
	numberColer = index => {
		if (index.index + index.plus == this.props.currentPage) {
			return (
				<span style={{ color: "#7c6ccf", cursor: "pointer", margin: 5 }}>
					{index.index + index.plus}
				</span>
			);
		} else {
			return (
				<span style={{ cursor: "pointer", margin: 5 }}>
					{index.index + index.plus}
				</span>
			);
		}
	};

	render() {
		var next, prev;
		if (this.props.currentPage == this.props.totalPages) {
			next = this.props.totalPages;
		} else {
			next = this.props.currentPage + 1;
		}

		if (this.props.currentPage == 1) {
			prev = 1;
		} else {
			prev = this.props.currentPage - 1;
		}
		return (
			<p className={"paiging"}>
				<a
					style={{ marginRight: 10, cursor: "pointer" }}
					onClick={() => {
						this.props.changeCurrentPage(1);
					}}
				>
					{`<<`}
				</a>
				<a
					style={{ marginRight: 10, cursor: "pointer" }}
					onClick={() => {
						this.props.changeCurrentPage(prev);
					}}
				>
					{`<`}
				</a>
				{this.renderPageNumbers()}
				<a
					style={{ marginLeft: 10, cursor: "pointer" }}
					onClick={() => {
						this.props.changeCurrentPage(next);
					}}
				>
					{`>`}
				</a>
				<a
					style={{ marginLeft: 10, cursor: "pointer" }}
					onClick={() => {
						this.props.changeCurrentPage(this.props.totalPages);
					}}
				>
					{`>>`}
				</a>
			</p>
		);
	}
}
