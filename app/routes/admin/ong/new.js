import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({

    model() {
        return hash({
            ong: this.store.createRecord('ong'),
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
        saveOng(newOng){
            newOng.save().then(() => this.transitionTo('admin.ong'));
        },

        willTransition(){
            this.controller.get('ong').rollbackAttributes();
        }
    }
});
