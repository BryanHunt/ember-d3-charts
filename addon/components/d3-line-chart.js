import Ember from 'ember';
import layout from '../templates/components/d3-line-chart';

export default Ember.Component.extend({
  layout,

  init() {
    this._super(...arguments);
    this.d3Transition = this.d3Transition || function(component, d3Data) {
      d3Data.transition();
    }
  }
});
