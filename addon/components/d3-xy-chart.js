import Ember from 'ember';
import layout from '../templates/components/d3-xy-chart';

const { computed } = Ember;

export default Ember.Component.extend({
  layout,

  clip: computed('plotWidth', 'plotHeight', function() {
    return {
      x: 0,
      y: 0,
      width: this.get('plotWidth'),
      height: this.get('plotHeight')
    };
  }),

  plotWidth: computed('options.width', 'options.plot.paddingLeft', 'options.plot.paddingRight', function() {
    return this.get('options.width') - this.get('options.plot.paddingLeft') - this.get('options.plot.paddingRight');
  }),

  plotHeight: computed('options.height', 'options.plot.paddingTop', 'options.plot.paddingBottom', function() {
    return this.get('options.height') - this.get('options.plot.paddingTop') - this.get('options.plot.paddingBottom');
  })
});
