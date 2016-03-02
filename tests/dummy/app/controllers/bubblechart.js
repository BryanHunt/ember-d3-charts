import Ember from 'ember';
import LinearScale from 'ember-d3-components/utils/scales/d3-linear-scale';

const { Controller } = Ember;

export default Controller.extend({
  xScale: LinearScale.create({domain: [0, 100], range: [0, 440]}),
  yScale: LinearScale.create({domain: [100, 0], range: [0, 430]}),
  rScale: LinearScale.create({domain: [0, 10], range: [10, 40]}),

  chartOptions: {
    width: 500,
    height: 500,
    title: { x: 250, y: 15, text: "Bubble Chart", transform: "" },
    xAxis: { transform: "translate(35,455)", label: { x: 250, y: 495, text: "X Axis", transform: "" } },
    yAxis: { transform: "translate(35,25)", label: { x: -240, y: 10, text: "Y Axis", transform: "rotate(-90)" } },
    xGrid: { transform: "translate(35,455)" },
    yGrid: { transform: "translate(35,25)" },
    plot: { transform: "translate(35,25)", paddingLeft: 35, paddingRight: 25, paddingTop: 25, paddingBottom: 45, showDots: true }
  },

  data: [{x: 0, y: 10, r: 5}, {x: 10, y: 20, r: 7}, {x: 20, y: 65, r: 2}, {x: 30, y: 35, r: 0}, {x: 50, y: 25, r: 5}, {x: 70, y: 55, r: 6}, {x: 80, y: 17, r: 9}, {x: 90, y: 40, r: 4}],

  init() {
    this.set('chartOptions.xAxis.scale', this.get('xScale'));
    this.set('chartOptions.yAxis.scale', this.get('yScale'));
    this.set('chartOptions.xGrid.scale', this.get('xScale'));
    this.set('chartOptions.yGrid.scale', this.get('yScale'));
    this.set('chartOptions.plot.xScale', this.get('xScale'));
    this.set('chartOptions.plot.yScale', this.get('yScale'));
    this.set('chartOptions.plot.rScale', this.get('rScale'));

    let colors = d3.scale.category10();
    this.set('chartOptions.plot.fill', (d, j) => {return colors(j);});
    this.set('chartOptions.plot.stroke', (d, j) => {return colors(j);});
  }
});
