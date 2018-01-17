import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('ong');
  this.route('contato');
  this.route('sobre');
  this.route('ongs');
  this.route('admin', function(){
    this.route('ong')
    this.route('usuario');
    this.route('cidade');
    this.route('estado');
  });
});

export default Router;
