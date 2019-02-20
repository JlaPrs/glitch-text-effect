import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            target: '_blank'
        };
    }

    render() {
        return (
            <div className="dp-contact">
                <ul className="dp-contacts">
                    <li>
                        <a href="https://github.com/JlaPrs" target={this.state.target}>
                            <FontAwesomeIcon icon={['fab', 'github']} />
                        </a>
                    </li>
                    <li>
                        <a href="https://codepen.io/jlaprs/" target={this.state.target}>
                            <FontAwesomeIcon icon={['fab', 'codepen']} />
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}
