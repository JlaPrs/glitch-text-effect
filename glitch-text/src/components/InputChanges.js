import React, {Component} from "react";

export default class InputChanges extends Component {
    handleChange = e => {
        const title = e.target.value;
        this.props.changeTitle(title);
    };

    render() {
        return (
            <div id="wrapper" className="content-wrapper">
                <h1 className="glitch" data-text={this.props.title}>{this.props.title}</h1>
                <input className="glitch-effect-input" onChange={this.handleChange} type="email" placeholder="write something..." />
            </div>
        );
    }
}
