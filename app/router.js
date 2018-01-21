import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('ong', {path: '/ong/:id'});
  this.route('contato');
  this.route('sobre');
  this.route('ongs');
  this.route('admin', function(){
    this.route('ong', function() {
      this.route('new');
      this.route('edit', {path: '/admin/ong/edit/:id'});
    })
    this.route('usuario', function() {
      this.route('new');
      this.route('edit', {path: '/admin/usuario/edit/:id'});
    });
    this.route('cidade', function() {
      this.route('new');
      this.route('edit', {path: '/admin/cidade/edit/:id'});
    });
    this.route('estado', function() {
      this.route('new');
      this.route('edit', {path: '/admin/estado/edit/:id'});
    });
    this.route('ong-tipo', function() {
      this.route('new');
      this.route('edit', {path: '/admin/ong-tipo/edit/:id'});
    });
    this.route('contato');
  });
});

export default Router;
