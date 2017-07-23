/// <reference path='../../types/velocity-react.d.ts' />

import * as React from 'react';
import { VelocityTransitionGroup } from 'velocity-react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkAction } from 'redux-thunk';

import Widget from '../../components/Widget';
import { RootState } from '../../reducers';
import { State as AppState } from '../../reducers/app';

import { WeatherResult } from '../../types/openweather';

import * as TodayActions from './actions';
import { State as TodayState } from './reducer';

interface ReduxState {
  app: AppState;
  today: TodayState;
}

interface ReduxProps {
  getWeather: () => ThunkAction<Promise<WeatherResult>, RootState, null>;
}

interface Props {
  animation: {
    duration?: number;
  };
}

interface State {
  isExpanded: boolean;
}

// type CombinedProps = ReduxState & ReduxProps & Props;
type CombinedProps = ReduxState & ReduxProps & Props;

class Today extends React.Component<CombinedProps, State> {

  static defaultProps: Partial<CombinedProps> = {
    animation: {
      duration: 2000,
    },
  };

  constructor(props: CombinedProps) {
    super(props);

    this.state = {
      isExpanded : true,
    };
  }

  handleExpand = () => {
    this.setState({
      isExpanded : true,
    });
  }

  handleMinimize = () => {
    this.setState({
      isExpanded : false,
    });
  }

  render() {

    const renderBody = (isExpanded: boolean) => {
      if (!isExpanded) {

        return null;
      }

      return null;
    };

    let bodyClass = 'widget__body ';
    bodyClass += this.state.isExpanded
      ? 'widget__body--expanded'
      : 'widget__body--minimized';

    return (
      <Widget className="today">
        <Widget.Header>
          <Widget.HeaderTitle icon="clock-o" name="Today" />
          <Widget.HeaderOptions
            animation={this.props.animation}
            isExpanded={this.state.isExpanded}
            onExpand={this.handleExpand}
            onMinimize={this.handleMinimize}
          />
        </Widget.Header>
        <VelocityTransitionGroup
          className={bodyClass}
          component="section"
          enter={{animation: 'slideDown', duration: this.props.animation.duration, style: { height: '' }}}
          leave={{animation: 'slideUp', duration: this.props.animation.duration}}
        >
          {renderBody(this.state.isExpanded)}
        </VelocityTransitionGroup>
      </Widget>
    );
  }
}

const mapStateToProps = (state: RootState): ReduxState => {
  return {
    app   : state.app,
    today : state.today,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>): ReduxProps => {

  return bindActionCreators({
    getWeather : TodayActions.getWeather,
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Today);
