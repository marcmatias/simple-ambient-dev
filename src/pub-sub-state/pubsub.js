
/**
 * A class that provides publish-subscribe functionality.
 * Allows objects to subscribe to events and receive data when the events are published.
 */
export default class Pubsub {
  /**
   * Creates a new Pubsub instance.
   */
  constructor() {
    this.events = {};
  }

  /**
   * Subscribes to an event.
   * @param {string} evName - The name of the event to subscribe to.
   * @param {function} fn - The function to call when the event is published.
   */
  subscribe(evName, fn) {
    //add an event with a name as new or to existing list
    this.events[evName] = this.events[evName] || [];
    this.events[evName].push(fn);
  }

  /**
   * Unsubscribes from an event.
   * @param {string} evName - The name of the event to unsubscribe from.
   * @param {function} fn - The function to remove from the list of subscribers.
   */
  unsubscribe(evName, fn) {
    //remove an event function by name
    if (this.events[evName]) {
      this.events[evName] = this.events[evName].filter(f => f !== fn);
    }
  }

  /**
   * Publishes an event.
   * @param {string} evName - The name of the event to publish.
   * @param {any} data - The data to send to subscribers of the event.
   */
  publish(evName, data) {
    //emit|publish|announce the event to anyone who is subscribed
    if (this.events[evName]) {
      this.events[evName].forEach(f => {
        f(data);
      });
    }
  }
}
