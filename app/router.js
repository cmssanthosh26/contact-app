import EmberRouter from '@ember/routing/router';
import config from 'contact-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('lists', function() {});

  this.route('create');
  this.route('list' , { path : '/lists/:id'});
  this.route('edit',{path : '/edit/:id'});
});
