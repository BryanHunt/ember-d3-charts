import Ember from 'ember';
import LinearScale from 'ember-d3-components/utils/scales/d3-linear-scale';
import OrdinalScale from '../utils/scales/d3-ordinal-scale';

const { Controller } = Ember;

export default Controller.extend({
  xScale: OrdinalScale.create({domain: ["Apples", "Oranges", "Bananas"], rangeBands: [0, 450], padding: 0.2}),
  yScale: LinearScale.create({domain: [100, 0], range: [0, 430]}),

  chartOptions: {
    width: 500,
    height: 500,
    title: { x: 250, y: 15, text: "Bar Chart", transform: "" },
    xAxis: { transform: "translate(35,455)", label: { x: 250, y: 495, text: "X Axis", transform: "" } },
    yAxis: { transform: "translate(35,25)", label: { x: -240, y: 10, text: "Y Axis", transform: "rotate(-90)" } },
    yGrid: { transform: "translate(35,25)" },
    plot: { transform: "translate(35,25)", paddingLeft: 35, paddingRight: 25, paddingTop: 25, paddingBottom: 45, showDots: true,
      barWidthTransform: function(dataPoint, scale) {return scale.rangeBand();}
    }
  },

  data: [{x: "Apples", y: 10}, {x: "Oranges", y: 20}, {x: "Bananas", y:35}],

  init() {
    this.set('chartOptions.xAxis.scale', this.get('xScale'));
    this.set('chartOptions.yAxis.scale', this.get('yScale'));
    this.set('chartOptions.yGrid.scale', this.get('yScale'));
    this.set('chartOptions.plot.xScale', this.get('xScale'));
    this.set('chartOptions.plot.yScale', this.get('yScale'));
  }
});
