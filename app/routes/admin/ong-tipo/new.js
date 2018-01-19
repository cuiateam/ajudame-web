import Route from '@ember/routing/route';

export default Route.extend({

    model() {
        return this.store.createRecord('ong-tipo');
    },

    actions: {
        saveOngTipo(newOngTipo){
            newOngTipo.save().then(() => this.transitionTo('admin.ong-tipo'));
        },

        willTransition(){
            this.controller.get('model').rollbackAttributes();
        }
    }
});
