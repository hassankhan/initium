// import * as _ from 'lodash';
import * as React from 'react';
import * as ReactGridLayout from 'react-grid-layout';

import GitHubWatchedIssues from './widgets/GitHubWatchedIssues';
// import Widget from './components/Widget';
// import asGridItem from './features/asGridItem';

import './App.css';

interface AppProps {
  className?: string;
  // items?: number;
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
    // items: 50,
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
        w: 3,
        h: 2,
        i: 'GitHubWatchedIssues',
      },
    ];
    // return _.map(new Array(this.props.items), (item, i) => {
    //   const y: number = _.result(this.props, 'y') || Math.ceil(Math.random() * 4) + 1;
    //   return {x: i * 2 % 12, y: Math.floor(i / 6) * y, w: 2, h: y, i: i.toString()};
    // });
  }

  generateDOM = () => {
    const animation = {
      duration : 1000,
    };

    return [
      (
        <div key="GitHubWatchedIssues">
          <GitHubWatchedIssues animation={animation} />
        </div>
      ),
    ];
  }

  onLayoutChange = (layout: {}) => {
    // this.props.onLayoutChange(layout);
  }

  render() {
    // const animation = {
    //   duration : 1000,
    // };

    const Grid = ReactGridLayout.WidthProvider(ReactGridLayout);

    return (
      <div className="app">
        <header className="header">
          <h2>Welcome to Initium</h2>
        </header>
        {/*<GitHubWatchedIssues animation={animation} />*/}
        <Grid layout={this.state.layout}>
          {this.generateDOM()}
        </Grid>
      </div>
    );
  }
}

export default App;
