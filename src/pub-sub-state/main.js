import Store from "./store.js";

window.addEventListener("DOMContentLoaded", app);

function app() {
  const store = new Store({ counter: 0 });
  const counter = document.querySelector("#counter");
  counter.innerText = store.getState().counter;

  const increment = document.querySelector("#increment");
  const decrement = document.querySelector("#decrement");
  const reset = document.querySelector("#reset");

  increment.addEventListener("click", () => {
    store.dispatch("INCREMENT");
  });
  decrement.addEventListener("click", () => {
    store.dispatch("DECREMENT");
  });
  reset.addEventListener("click", () => {
    store.dispatch("RESET");
  });

  store.pubSub.subscribe("stateUpdated", function () {
    counter.innerText = store.getState().counter;
  })
}
