import Pubsub from "./pubsub.js";
import reducer from "./reducer.js";

export default class Store {
  constructor(initialState) {
    const self = this;
    this.pubSub = new Pubsub();

    this.state = new Proxy(
      { value: initialState },
      {
        set(obj, prop, value) {
          obj[prop] = value;
          self.pubSub.publish("stateUpdated", self.getState());
          return true;
        },
      }
    );

  }
  
  /**
   * Get actual state
   */
  getState() {
    return { ...this.state.value };
  }
 
  /**
   * Dispatch actions witch call reducer() to produce the next state
   *
   * @param {String} action action that will be returned by reducer
   */
  dispatch(action) {
    const prevState = this.getState();
    this.state.value = reducer(prevState, action);
  }  
}
