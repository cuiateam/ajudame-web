import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({

    model() {
        return hash({
            cidade: this.store.createRecord('cidade'),
            estados: this.store.findAll('estado')
        });
    },

    setupController(controller, model) {
        controller.set('cidade', model.cidade);
        controller.set('estados', model.estados);
        
        this._super(controller, model);
      },

    actions: {
        saveCidade(newCidade){
            newCidade.save().then(() => this.transitionTo('admin.cidade'));
        },

        willTransition(){
            this.controller.get('cidade').rollbackAttributes();
        }
    }
});
