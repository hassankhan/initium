// import * as _ from 'lodash';
import * as React from 'react';
import * as ReactGridLayout from 'react-grid-layout';

import GitHubWatchedIssues from './widgets/GitHubWatchedIssues';
import asGridItem from './features/asGridItem';
// import Widget from './components/Widget';

import './App.css';

const animation = {
  duration : 1000,
};

interface AppProps {
  className?: string;
  cols?: number;
  rowHeight?: number;
  onLayoutChange?: Function;
  verticalCompact?: boolean;
}

interface AppState {
  layout: ReactGridLayout.Layout[];
}

class App extends React.Component<AppProps, AppState> {

  static defaultProps: Partial<AppProps> = {
    className: 'layout',
    cols: 12,
    rowHeight: 50,
    onLayoutChange: () => { return; },
    verticalCompact: true,
  };

  constructor(props: AppProps) {
    super(props);

    this.state = {
      layout : this.generateLayout(),
    };
  }

  generateLayout = () => {
    return [
      {
        x: 1,
        y: 1,
        w: 4,
        h: 2,
        i: 'GitHubWatchedIssues',
      },
      {
        x: 7,
        y: 1,
        w: 4,
        h: 2,
        i: 'GitHubWatchedIssues2',
      },
    ];
  }

  render() {

    const Grid = ReactGridLayout.WidthProvider(ReactGridLayout);

    const GitHubWidget = asGridItem(<GitHubWatchedIssues animation={animation} />);
    const GitHubWidget2 = asGridItem(<GitHubWatchedIssues animation={animation} />);

    return (
      <div className="app">
        <header className="header">
          <h2>Welcome to Initium</h2>
        </header>
        <Grid layout={this.state.layout}>
          <GitHubWidget key="GitHubWatchedIssues" />
          <GitHubWidget2 key="GitHubWatchedIssues2" />
        </Grid>
      </div>
    );
  }
}

export default App;
