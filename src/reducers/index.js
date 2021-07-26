import { combineReducers } from 'redux';

import count from './count';

const reducer = combineReducers({
  count,
});

export default reducer;
