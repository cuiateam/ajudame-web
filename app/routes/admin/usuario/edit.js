import Route from '@ember/routing/route';

export default Route.extend({
    
    model(params){
        return this.store.findRecord('usuario', params.id);
    },

    actions: {
  
      saveUsuario(usuario) {
        usuario.save().then(() => this.transitionTo('admin.usuario'));
      },
  
      willTransition(transition) {
  
        let model = this.controller.get('model');
  
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