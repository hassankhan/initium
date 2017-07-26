import * as _ from 'lodash';
import * as React from 'react';
import { VelocityTransitionGroup } from 'velocity-react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkAction } from 'redux-thunk';

import * as WidgetActions from '../../actions/widgets';
import { RootState } from '../../reducers';
import { State as AppState } from '../../reducers/app';
import { selectLayoutById } from '../../reducers/layouts';

import Widget from '../../components/Widget';

import { LayoutItem } from '../../types/app';
import { WeatherResult } from '../../types/yahoo-weather';

import * as WeatherActions from './actions';
import { State as WeatherState } from './reducer';
import WeatherDetails from './WeatherDetails';

interface ReduxState {
  app: AppState;
  layout: LayoutItem;
  weather: WeatherState;
}

interface ReduxProps {
  getWeather: () => ThunkAction<Promise<WeatherResult>, RootState, null>;
  handleExpand: (widgetId: string) => WidgetActions.ExpandAction;
  handleMinimize: (widgetId: string) => WidgetActions.MinimizeAction;
}

interface Props {
  animation: {
    duration?: number;
  };
}

interface State {
  // isExpanded: boolean;
}

type CombinedProps = ReduxState & ReduxProps & Props;

class Weather extends React.Component<CombinedProps, State> {

  static displayName = 'WeatherWidget';

  static defaultProps: Partial<CombinedProps> = {
    animation: {
      duration: 2000,
    },
  };

  constructor(props: CombinedProps) {
    super(props);
    //
    // this.state = {
    //   isExpanded : true,
    // };
  }

  componentDidMount() {
    return this.props.getWeather();
  }

  // componentWillReceiveProps(nextProps) {
  //
  // }

  shouldComponentUpdate(nextProps: CombinedProps) {
    // console.log(nextProps);
    // return !_.isEqual(nextProps, this.props);

    const conditions = _.isEqual(nextProps.layout, this.props.layout) ||
      _.isEqual(nextProps.weather, this.props.weather);

    // console.log(conditions);
    return conditions;
  }

  handleExpand = () => {
    this.props.handleExpand('WeatherWidget');
  }

  handleMinimize = () => {
    this.props.handleMinimize('WeatherWidget');
  }

  render() {

    // console.log('props', this.props);

    const renderIfExpanded = (isExpanded: boolean, Component: JSX.Element) => {

      if (!isExpanded) {

        return null;
      }

      return Component;
    };

    let bodyClass = 'widget__body ';
    bodyClass += this.props.layout.isExpanded
      ? 'widget__body--expanded'
      : 'widget__body--minimized';

    return (
      <Widget className="weather">
        <Widget.Header>
          <Widget.HeaderTitle icon="sun-o" name="Weather" />
          <Widget.HeaderOptions
            animation={this.props.animation}
            isExpanded={this.props.layout.isExpanded}
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
          {renderIfExpanded(this.props.layout.isExpanded, <WeatherDetails weather={this.props.weather.weather} />)}
        </VelocityTransitionGroup>
      </Widget>
    );
  }
}

const mapStateToProps = (state: RootState): ReduxState => {
  return {
    app     : state.app,
    layout  : selectLayoutById(state.layouts, 'WeatherWidget'),
    weather : state.weather,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>): ReduxProps => {

  return bindActionCreators({
    getWeather : WeatherActions.getWeather,
    handleExpand : WidgetActions.handleExpand,
    handleMinimize : WidgetActions.handleMinimize,
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Weather);
