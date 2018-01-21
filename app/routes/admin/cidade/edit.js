import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
    
    model(params){
        return hash({
            cidade: this.store.findRecord('cidade', params.id),
            estados: this.store.findAll('estado')
        });
    },

    setupController(controller, model) {
        controller.set('cidade', model.cidade);
        controller.set('estados', model.estados);
        
        this._super(controller, model);
      },

    actions: {
  
      saveCidade(cidade) {
        cidade.save().then(() => this.transitionTo('admin.cidade'));
      },
  
      willTransition(transition) {
  
        let model = this.controller.get('cidade');
  
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