import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('xychart');
  this.route('bubblechart');
  this.route('barchart');
});

export default Router;
