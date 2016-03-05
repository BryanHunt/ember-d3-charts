import Ember from 'ember';
import layout from '../templates/components/d3-bubble-chart';

export default Ember.Component.extend({
  layout,

  d3Transition(component, d3Data) {
    d3Data.transition();
  }
});
