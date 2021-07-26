export const INCREASE = 'count/INCREASE';

export const DECREASE = 'count/DECREASE';

export const increaseCount = () => {
  return {
    type: INCREASE,
  };
};
export const decreaseCount = () => {
  return {
    type: DECREASE,
  };
};
