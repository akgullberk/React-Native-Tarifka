import {getCategory} from '../NetworkUrl';
import {get} from '../main';

const getCategoryApi = () => {
  const productUrl = getCategory;
  return get(productUrl);
};

export {getCategoryApi};
