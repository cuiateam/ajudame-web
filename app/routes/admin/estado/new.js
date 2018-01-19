import Route from '@ember/routing/route';

export default Route.extend({

    model() {
        return this.store.createRecord('estado');
    },

    actions: {
        saveEstado(newOngTipo){
            newOngTipo.save().then(() => this.transitionTo('admin.estado'));
        },

        willTransition(){
            this.controller.get('model').rollbackAttributes();
        }
    }
});
