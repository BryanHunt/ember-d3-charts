import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('xychart');
  this.route('bubblechart');
  this.route('barchart');
  this.route('areachart');
});

export default Router;
