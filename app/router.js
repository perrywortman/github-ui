import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('orgs'); // orgs
  this.route('org', { path: 'org/:id'}, function() { // org/netflix
    this.route('repos'); // org/netflix/repos
    this.route('repo', { path: ':repoid'}, function() { // org/netflix/hystrix
      this.route('contributors'); // org/netflix/hystrix/contributors
      this.route('issues'); // org/netflix/hystrix/issues
    });
  });
  this.route('not-found', { path: '*path' });
});

export default Router;
