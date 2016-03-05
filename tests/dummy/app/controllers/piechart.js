import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  chartOptions: {
    width: 500,
    height: 500,
    title: { x: 250, y: 15, text: "Pie Chart", transform: "" },
    plot: { transform: "translate(250,130)" }
  },

  data: [{x: 0, y: 10}, {x: 10, y: 20}, {x: 20, y: 35}, {x: 30, y: 45}, {x: 50, y: 65}, {x: 70, y: 95}, {x: 80, y: 97}, {x: 90, y: 100}],

  init() {
    let colors = d3.scale.category10();

    this.set('chartOptions.plot.fill', (d, j) => {return colors(j);});
    this.set('chartOptions.plot.layout', this.get('layout'));
  }
});
