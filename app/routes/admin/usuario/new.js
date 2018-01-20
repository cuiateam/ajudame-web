import Route from '@ember/routing/route';

export default Route.extend({

    model(){
        return this.store.createRecord('usuario');
    },

    actions: {

        saveUsuario(newUsuario){
            newUsuario.save().then(() => this.transitionTo('admin.usuario'));
        },

        willTransition(){
            this.controller.get('usuario').rollbackAttributes();
        }
    }
});
