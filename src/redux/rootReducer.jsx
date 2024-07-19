import { combineReducers } from 'redux';
import ticketReducer from './TicketReducer';

const rootReducer = combineReducers({
  ticket: ticketReducer,
});

export default rootReducer;
