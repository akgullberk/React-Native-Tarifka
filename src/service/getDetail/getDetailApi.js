import {getDetail} from '../NetworkUrl';
import {get} from '../main';

const getDetailApi = body => {
  const productUrl = getDetail + body;
  return get(productUrl);
};

export {getDetailApi};
