
/**
 * reducer functions to be executed updating the actual state
 *
 * @param {Store} actual state to be updated
 * @param {String} action name to be executed
 */
export default function reducer(state, action) {
  switch (action) {
    case "INCREMENT":
      state.counter = state.counter + 1;
      break;
    case "DECREMENT":
      state.counter = state.counter - 1;
      break;
    case "RESET":
    default:
      state.counter = 0;
      break;
  }

  return state;
}
