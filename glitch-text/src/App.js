import React, { Component } from 'react';
import InputChanges from './components/InputChanges';

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
      <div className="App" id="app">
        <header className="App-header">
            <InputChanges changeTitle={this.changeTitle} title={this.state.title} />

            <p>image by: Lewis Roberts</p>
        </header>
      </div>
    );
  }
}

export default App;
