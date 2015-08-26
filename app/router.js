import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('post');
  this.route('results', function() {
      // this.route('index', { path: '/'});
  });
  this.route('2015', function () {
      this.route('index', { path: '/'});
  });
  this.route('nationalities');
  this.route('nationality', { path: '/nationalities/:code'});
  this.route('component-test');
  this.route('model-test');
});

export default Router;
