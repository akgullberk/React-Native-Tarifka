import {getMeals} from '../NetworkUrl';
import {get} from '../main';

const getMealsApi = body => {
  const productUrl = getMeals + body;
  return get(productUrl);
};

export {getMealsApi};
