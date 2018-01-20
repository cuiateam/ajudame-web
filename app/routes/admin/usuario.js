import Route from '@ember/routing/route';

export default Route.extend({

    model() {
        return this.store.findAll('usuario');
    },

    actions: {

        deleteUsuario(usuario){
            let confirmation = confirm('Deletar registro?');

            if (confirmation) {
                usuario.destroyRecord();
            }
        }
    }
});
