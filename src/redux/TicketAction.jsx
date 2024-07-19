import axios from 'axios';

export const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS';
export const FETCH_TICKETS_FAILURE = 'FETCH_TICKETS_FAILURE';
export const ADD_TICKET = 'ADD_TICKET';
export const UPDATE_TICKET = 'UPDATE_TICKET';
export const DELETE_TICKET = 'DELETE_TICKET';

const apiUrl = './tickets.json';

export const deleteTicket = (ticketEmail) => ({
    type: DELETE_TICKET,
    payload: ticketEmail,
});


export const addTicket = (ticket) => ({
    type: ADD_TICKET,
    payload: ticket,
});

export const updateTicket = (ticket) => ({
    type: UPDATE_TICKET,
    payload: ticket,
});



export const fetchTickets = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(apiUrl);
            dispatch({
                type: FETCH_TICKETS_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            dispatch({
                type: FETCH_TICKETS_FAILURE,
                payload: error.message,
            });
        }
    };
};
