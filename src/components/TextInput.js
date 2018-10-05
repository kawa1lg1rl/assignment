import React from "react";


export default class TextInput extends React.Component {
    propsChange = (e) => {
        this.props.change(e.target.value)
    }
    render() {
        return (
            <input value={this.props.value} onChange={this.propsChange} />

        );
    }
}
