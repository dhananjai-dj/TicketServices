import {
    FETCH_TICKETS_SUCCESS,
    FETCH_TICKETS_FAILURE,
    ADD_TICKET,
    UPDATE_TICKET,
    DELETE_TICKET
  } from './TicketAction';
  
  const initialState = {
    tickets: [],
    loading: false,
    error: null,
  };
  
  const ticketReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TICKETS_SUCCESS:
        return {
          ...state,
          tickets: action.payload,
        };
      case FETCH_TICKETS_FAILURE:
        return {
          ...state,
          error: action.payload,
        };
      case ADD_TICKET:
        return {
          ...state,
          tickets: [action.payload, ...state.tickets],
        };
      case UPDATE_TICKET:
        const updatedIndex = state.tickets.findIndex(ticket => ticket.email === action.payload.email);
        
        const updatedTickets = [...state.tickets];
        updatedTickets[updatedIndex] = action.payload;
        
        return {
          ...state,
          tickets: updatedTickets,
        };
  
        case DELETE_TICKET:
          return {
            ...state,
            tickets: state.tickets.filter(ticket => ticket.email !== action.payload),
          };
      default:
        return state;
    }
  };
  
  export default ticketReducer;
  