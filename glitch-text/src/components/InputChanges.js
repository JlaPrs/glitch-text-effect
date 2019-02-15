import React, {Component} from "react";

export default class InputChanges extends Component {
    handleChange = e => {
        const title = e.target.value;
        this.props.changeTitle(title);
    };

    render() {
        return (
            <div id="wrapper">
                <input  placeholder=""/>

                <div className="webflow-style-input">
                    <input className="" onChange={this.handleChange} type="email" placeholder="write something..." />
                    <button type="submit">
                        {/*FontAwesomeIcon hinzufügen*/}
                        <i class="icon ion-android-arrow-forward"></i>
                    </button>
                </div>

                <h1 className="glitch" data-text={this.props.title}>{this.props.title}</h1>
            </div>
        );
    }
}
