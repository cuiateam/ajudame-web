import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.createRecord('contato');
  },

  actions: {

    sendMessage(newContactMessage) {
      newContactMessage.dataEnvio = new Date().toLocaleString();
      newContactMessage.save().then(() => this.controller.set('responseMessage', true));
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }

      this.controller.set('responseMessage', false);
    }
  }
});