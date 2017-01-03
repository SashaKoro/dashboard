import { combineReducers } from 'redux';
import GadgetReducer from './reducer_gadgets';
import ActiveGadget from './reducer_active_gadget';

const rootReducer = combineReducers({
  gadgets: GadgetReducer,
  activeGadget: ActiveGadget
});

export default rootReducer;
