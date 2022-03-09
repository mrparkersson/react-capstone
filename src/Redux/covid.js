const GET_API = 'data/covid/GET_API';

export const getAPI = (payload) => ({
  type: GET_API,
  payload,
});

const initialState = [];

const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default covidReducer;
