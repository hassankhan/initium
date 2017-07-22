// import * as _ from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as ReactGridLayout from 'react-grid-layout';

import * as LayoutsActions from '../../actions/layouts';

import Spotify from '../../widgets/Spotify';
import GitHubWatchedIssues from '../../widgets/GitHubWatchedIssues';
import asGridItem from '../../features/asGridItem';
import { RootState } from '../../reducers/index';
import { LayoutChangeCallback } from '../../types/react-grid-layout';

import './styles.css';

const animation = {
  duration : 1000,
};

interface StateProps {
  layouts: ReactGridLayout.Layout[];
  onDrag: ReactGridLayout.ItemCallback;
  onDragStart: ReactGridLayout.ItemCallback;
  onDragStop: ReactGridLayout.ItemCallback;
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

class App extends React.Component<Props & StateProps, State> {

  static defaultProps: Partial<Props & StateProps> = {
    className: 'layout',
    cols: 12,
    rowHeight: 50,
    onLayoutChange: () => { return; },
    verticalCompact: true,
  };

  shouldComponentUpdate(nextProps: Props & StateProps, nextState: State) {
    // console.log(!_.isEqual(nextProps.layouts, this.props.layouts))
    return false;
  }

  render() {

    const Grid = ReactGridLayout.WidthProvider(ReactGridLayout);

    const GitHubWidget = asGridItem(<GitHubWatchedIssues animation={animation} />);
    const SpotifyWidget = asGridItem(<Spotify animation={animation} />);

    return (
      <div className="app">
        <header className="header">
          <h2>Welcome to Initium</h2>
        </header>
        <Grid
          layout={this.props.layouts}
          rowHeight={52}
          onLayoutChange={this.props.onLayoutChange}
        >
          {/*onDrag={this.props.onDrag}*/}
          {/*onDragStart={this.props.onDragStart}*/}
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
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {

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
