import Ember from 'ember';
import LinearScale from 'ember-d3-components/utils/scales/d3-linear-scale';

const { Controller, observer } = Ember;

export default Controller.extend({
  xScale: LinearScale.create({domain: [0, 100], range: [0, 440]}),
  yScale: LinearScale.create({domain: [100, 0], range: [0, 430]}),

  chartOptions: {
    width: 500,
    height: 500,
    chartTitle: "XY Chart",
    title: { x: 250, y: 15, text: "XY Line Chart", transform: "" },
    xAxis: { transform: "translate(35,455)", label: { x: 250, y: 495, text: "X Axis", transform: "" } },
    yAxis: { transform: "translate(35,25)", label: { x: -240, y: 10, text: "Y Axis", transform: "rotate(-90)" } },
    xGrid: { transform: "translate(35,455)" },
    yGrid: { transform: "translate(35,25)" },
    plot: { transform: "translate(35,25)", paddingLeft: 35, paddingRight: 25, paddingTop: 25, paddingBottom: 45, showDots: true }
  },

  data: [{x: 0, y: 10}, {x: 10, y: 20}, {x: 20, y: 35}, {x: 30, y: 45}, {x: 50, y: 65}, {x: 70, y: 95}, {x: 80, y: 97}, {x: 90, y: 100}],

  init() {
    this.set('chartOptions.xAxis.scale', this.get('xScale'));
    this.set('chartOptions.yAxis.scale', this.get('yScale'));
    this.set('chartOptions.xGrid.scale', this.get('xScale'));
    this.set('chartOptions.yGrid.scale', this.get('yScale'));
    this.set('chartOptions.plot.xScale', this.get('xScale'));
    this.set('chartOptions.plot.yScale', this.get('yScale'));
  }
});