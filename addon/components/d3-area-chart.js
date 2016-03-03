import Ember from 'ember';
import layout from '../templates/components/d3-area-chart';
import Accessor from 'ember-d3-components/utils/accessor';

export default Ember.Component.extend({
  layout,

  init() {
    this._super(...arguments);
    this.xAccessor = this.xAccessor || Accessor.create({name: "x"});
    this.yAccessor = this.yAccessor || Accessor.create({name: "y"});
    this.y0Accessor = this.y0Accessor || Accessor.create({name: "y"});
  },

  d3Transition(component, d3Data) {
    d3Data.transition();
  }
});
