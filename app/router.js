import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    // this.route('index', { path: '/'});
    this.route('results', function() {
        // this.route('index', { path: '/'});
        // this.route('2015')
    });
    this.route('nationalities');
    this.route('nationality', { path: '/nationalities/:code'});
});

export default Router;
