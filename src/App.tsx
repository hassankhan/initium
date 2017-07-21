import * as React from 'react';
// import * as ReactGridLayout from 'react-grid-layout';

import GitHubWatchedIssues from './widgets/GitHubWatchedIssues';
// import Widget from './components/Widget';
// import asGridItem from './features/asGridItem';

import './App.css';
const logo = require('./logo.svg');

class App extends React.Component<{}, {}> {

  render() {
    const animation = {
      duration : 1000,
    };

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Initium</h2>
        </div>
        <GitHubWatchedIssues animation={animation} />
      </div>
    );
  }
}

export default App;
