import Ember from 'ember';
import layout from '../templates/components/d3-pie-chart';
import PieLayout from 'ember-d3-components/utils/layouts/d3-pie-layout';

export default Ember.Component.extend({
  layout,

  d3layout: PieLayout.create({value: function(dataPoint) {return dataPoint.y;}}),

  layoutData: Ember.computed('data', function() {
    return this.get('d3layout').layout(this.get('data'));
  }),

  d3Transition(component, d3Data, arc) {
    d3Data.transition().attrTween("d", function(dataPoint) {
      let currentArc = component.get('currentArc');

      if(!currentArc) {
        currentArc = {startAngle: 0, endAngle: 0};
      }

      let interpolate = d3.interpolate(currentArc, dataPoint);
      component.set('currentArc', interpolate(1));

      return function(t) {
        return arc(interpolate(t));
      }
    });
  }
});
