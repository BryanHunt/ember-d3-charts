import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('linechart');
  this.route('bubblechart');
  this.route('barchart');
  this.route('areachart');
  this.route('piechart');
  this.route('stackedareachart');
  this.route('stackedbarchart');
});

export default Router;
