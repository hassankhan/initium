import * as _ from 'lodash';

import { IconMap } from '../../../types/yahoo-weather';

const iconMaps: IconMap[] = require('./iconMaps.json');

export const findIconByCode = (code: number): IconMap | null => {
  const iconDetails = _.find(iconMaps, { code });

  if (!iconDetails) {
    return null;
  }

  return iconDetails;
};
