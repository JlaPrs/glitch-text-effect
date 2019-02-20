import React, { Component } from 'react';
import InputChanges from './components/InputChanges';
import Contacts from "./components/Contacts";

import './App.scss';

class App extends Component {
    componentDidMount(){
        document.title = "Glitch effect"
    }

    constructor(props) {
        super(props);
        this.state = {
            title: props.defaultTitle,
        }
    }

    changeTitle = title => {
        console.log(title);
        this.setState({
            title: title || this.props.defaultTitle
        });
    };

  render() {
    return (
        <div className="glitch-app" id="app">
          <InputChanges changeTitle={this.changeTitle} title={this.state.title} />
            <Contacts/>
          <p className="dp-img-by">Background-image by: Lewis Roberts</p>
        </div>
    );
  }
}

export default App;
