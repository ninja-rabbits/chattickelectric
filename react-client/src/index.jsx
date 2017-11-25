// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';

// Components
import Home from './components/Home';
import About from './components/About';
import Contact from './components/contact.js';

// Other
import SwipeableViews from 'react-swipeable-views';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <div className="App">
        <img src='https://i.imgur.com/lTvTCbs.png' alt="" style={{margin: 'auto', display: 'block', width: '40%'}}/>
        <MuiThemeProvider>
          <div>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              inkBarStyle={{backgroundColor: 'red', marginLeft: '12.5%'}}
              tabItemContainerStyle={{width: '80%', margin: 'auto'}}>
              <Tab label="Home" value={0} style={{backgroundColor: '#584915'}}/>
              <Tab label="About Us" value={1} style={{backgroundColor: '#584915'}}/>
              <Tab label="Contact" value={2} style={{backgroundColor: '#584915'}}/>
            </Tabs>

            <SwipeableViews
              index={this.state.value}
              onChangeIndex={this.handleChange}>
              <Home/>
              <About/>
              <Contact/>
            </SwipeableViews>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
