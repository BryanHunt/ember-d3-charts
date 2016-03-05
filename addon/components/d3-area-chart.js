import Ember from 'ember';
import layout from '../templates/components/d3-area-chart';

export default Ember.Component.extend({
  layout,

  d3Transition(component, d3Data) {
    d3Data.transition();
  }
});
