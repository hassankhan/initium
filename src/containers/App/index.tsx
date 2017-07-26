// import * as _ from 'lodash';
import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ReactGridLayout from 'react-grid-layout';

import * as LayoutsActions from '../../actions/layouts';
import { RootState } from '../../reducers/index';
import { State as AppState } from '../../reducers/app';
import { State as LayoutsState } from '../../reducers/layouts';

import asGridItem from '../../features/asGridItem';

import HotUkDeals from '../../widgets/hukd';
import Spotify from '../../widgets/Spotify';
import Weather from '../../widgets/weather';
import GitHubWatchedIssues from '../../widgets/GitHubWatchedIssues';

import { LayoutChangeCallback } from '../../types/react-grid-layout';

const animation = {
  duration : 1000,
};

interface ReduxState {
  app: AppState;
  layouts: LayoutsState;
}

interface ReduxProps {
  // onDrag: ReactGridLayout.ItemCallback;
  // onDragStart: ReactGridLayout.ItemCallback;
  // onDragStop: ReactGridLayout.ItemCallback;
  onLayoutChange: LayoutChangeCallback;
}

interface Props {
  className?: string;
  cols?: number;
  rowHeight?: number;
  onLayoutChange?: (layout: ReactGridLayout.Layout) => void;
  verticalCompact?: boolean;
}

interface State {
  layout: ReactGridLayout.Layout[];
}

type CombinedProps = ReduxState & ReduxProps & Props;

class App extends React.Component<CombinedProps, State> {

  static defaultProps: Partial<CombinedProps> = {
    className: 'layout',
    cols: 12,
    rowHeight: 50,
    verticalCompact: true,
  };

  shouldComponentUpdate(nextProps: CombinedProps, nextState: State) {
    // console.log(!_.isEqual(nextProps.layouts, this.props.layouts))
    return false;
  }

  render() {

    const Grid = ReactGridLayout.WidthProvider(ReactGridLayout);

    const GitHubWidget = asGridItem(<GitHubWatchedIssues animation={animation} />);
    const SpotifyWidget = asGridItem(<Spotify animation={animation} />);
    const WeatherWidget = asGridItem(<Weather />);
    const HotUkDealsWidget = asGridItem(<HotUkDeals />);

    // const WeatherWidget2 = asGridItem(<Weather />);

    return (
      <div className="app">
        <header className="header">
          <h2>Welcome to Initium</h2>
        </header>
        <section className="layout">
          <Grid
            className="layout__grid"
            draggableHandle=".widget__header"
            layout={this.props.layouts}
            rowHeight={52}
            onLayoutChange={this.props.onLayoutChange}
            verticalCompact={false}
          >
            <GitHubWidget key="GitHubWatchedIssuesWidget" />
            <SpotifyWidget key="SpotifyWidget" />
            <WeatherWidget key="WeatherWidget" />
            <HotUkDealsWidget key="HotUkDealsWidget" />
            {/*<WeatherWidget2 key="WeatherWidget2" />*/}
          </Grid>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): ReduxState => {
  return {
    app     : state.app,
    layouts : state.layouts,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>): ReduxProps => {

  return bindActionCreators({
    onLayoutChange : LayoutsActions.handleLayoutsChange,
    // onDrag      : LayoutsActions.handleDragItem,
    // onDragStart : LayoutsActions.handleStartDragItem,
    // onDragStop  : LayoutsActions.handleStopDragItem,
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
