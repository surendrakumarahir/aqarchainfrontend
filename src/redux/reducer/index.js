import {combineReducers} from 'redux';

import app from './app';
import adminuser from './adminuser';
// import company from './company';
// import checkout from './checkout';
// import warehouse from './warehouse';
// import vehicle from './vehicle';

export default combineReducers({
  app,
  adminuser,
  // company,
  // checkout,
  // warehouse,
  // vehicle,
});
