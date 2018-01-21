import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
    
    model(params){
        return hash({
            ong: this.store.findRecord('ong', params.id),
            ongTipos: this.store.findAll('ong-tipo'),
            cidades: this.store.findAll('cidade')
        });
    },

    setupController(controller, model) {
        controller.set('ong', model.ong);
        controller.set('ongTipos', model.ongTipos);
        controller.set('cidades', model.cidades);
        
        this._super(controller, model);
      },

    actions: {
  
      saveOng(ong) {
        ong.save().then(() => this.transitionTo('admin.ong'));
      },
  
      willTransition(transition) {
  
        let model = this.controller.get('ong');
  
        if (model.get('hasDirtyAttributes')) {
          let confirmation = confirm("Suas mundaças não foram salvas ainda. Gostaria de fechar?");
  
          if (confirmation) {
            model.rollbackAttributes();
          } else {
            transition.abort();
          }
        }
      }
    }
  });