const initialState = {
  count: 0,
  loading: false
};

export const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD":
      return { count: state.count + action.payload.number };
    case "SUB":
      return { count: state.count - action.payload.number };
    case "LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
