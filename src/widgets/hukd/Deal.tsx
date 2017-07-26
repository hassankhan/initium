import * as React from 'react';
// import * as Icon from 'react-fontawesome';

import { HukdDeal } from './types';

type DealProps = HukdDeal;

const Deal: React.SFC<DealProps> = (props) => {

  return (
    <li>

      <section className="hukd__deal">

        <section className="left">
          <a href={props.deal_link}>
            <img className="hukd__deal-image" src={props.deal_image} alt={props.title} title={props.title} />
          </a>
          <h4 className="hukd__deal-heat">{props.temperature}</h4>
        </section>

        <section className="right">
          <a href={props.deal_link}>
            <h4 className="hukd__deal-title">{props.title}</h4>
          </a>
        </section>

      </section>

    </li>
  );
};

Deal.displayName = 'Deal';

export default Deal;
