import Route from '@ember/routing/route';

export default Route.extend({

    model() {
        return this.store.createRecord('cidade');
    },

    estados(){
        return this.store.findAll('estado');
    },

    actions: {
        saveCidade(newOngTipo){
            newOngTipo.save().then(() => this.transitionTo('admin.cidade'));
        },

        willTransition(){
            this.controller.get('model').rollbackAttributes();
        }
    }
});
