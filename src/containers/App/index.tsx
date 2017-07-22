import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as ReactGridLayout from 'react-grid-layout';

import Spotify from '../../widgets/Spotify';
import GitHubWatchedIssues from '../../widgets/GitHubWatchedIssues';
import asGridItem from '../../features/asGridItem';
import { RootState } from '../../reducers/index';

import './styles.css';

const animation = {
  duration : 1000,
};

interface AppStateProps {
  layouts: ReactGridLayout.Layout[];
}

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

class App extends React.Component<AppProps & AppStateProps, AppState> {

  static defaultProps: Partial<AppProps & AppStateProps> = {
    className: 'layout',
    cols: 12,
    rowHeight: 50,
    onLayoutChange: () => { return; },
    verticalCompact: true,
  };

  render() {

    const Grid = ReactGridLayout.WidthProvider(ReactGridLayout);

    const GitHubWidget = asGridItem(<GitHubWatchedIssues animation={animation} />);
    const SpotifyWidget = asGridItem(<Spotify animation={animation} />);

    return (
      <div className="app">
        <header className="header">
          <h2>Welcome to Initium</h2>
        </header>
        <Grid layout={this.props.layouts} rowHeight={52}>
          <GitHubWidget key="GitHubWatchedIssues" />
          <SpotifyWidget key="Spotify" />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    layouts: state.layouts,
  };
}

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {
  return {
    // onTodoClick: id => {
    //   dispatch(toggleTodo(id));
    // }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
