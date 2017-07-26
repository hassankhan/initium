import * as _ from 'lodash';
import * as React from 'react';
import { Dispatch, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { VelocityTransitionGroup } from 'velocity-react';

import Widget from '../../components/Widget';
import { RootState } from '../../reducers/index';

import * as HukdActions from './actions';
import { HukdDeal, HukdResult } from './types';
import Deal from './Deal';
const logo = require('./images/logo.svg');

interface ReduxState {
  deals?: HukdResult;
}

interface ReduxProps {
  getDeals: () => ThunkAction<Promise<HukdResult>, RootState, null>;
}

interface Props {
  animation: {
    duration?: number;
  };
}

interface State {
  isExpanded: boolean;
}

type CombinedProps = ReduxState & ReduxProps & Props;

class Hukd extends React.Component<CombinedProps, State> {

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

  componentDidMount() {
    return this.props.getDeals();
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

      return _.map(this.props.deals, (deal: HukdDeal) => {
        // console.log(deal);

        return (<Deal key={deal.deal_link} {...deal} />);
      });
    };

    let bodyClass = 'widget__body ';
    bodyClass += this.state.isExpanded
      ? 'widget__body--expanded'
      : 'widget__body--minimized';

    return (
      <Widget className="hukd">
        <Widget.Header>
        <Widget.HeaderTitle icon={logo} name="" />
          <Widget.HeaderOptions
            animation={this.props.animation}
            isExpanded={this.state.isExpanded}
            onExpand={this.handleExpand}
            onMinimize={this.handleMinimize}
          />
        </Widget.Header>
        <Widget.Body className={bodyClass}>
          <VelocityTransitionGroup
            className="hukd__deal-list"
            component="ul"
            enter={{animation: 'slideDown', duration: this.props.animation.duration, style: { height: '' }}}
            leave={{animation: 'slideUp', duration: this.props.animation.duration}}
          >
            {renderBody(this.state.isExpanded)}
          </VelocityTransitionGroup>
        </Widget.Body>
      </Widget>
    );
  }
}

const mapStateToProps = (state: RootState): ReduxState => {
  return {
    deals : state.hukd.deals,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>): ReduxProps => {

  return bindActionCreators({
    getDeals : HukdActions.getDeals,
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hukd);
