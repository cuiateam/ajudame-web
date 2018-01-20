import Route from '@ember/routing/route';

export default Route.extend({

    model(){
        return this.store.findAll('estado');
    },

    actions: {

        deleteEstado(estado){
            let confirmation = confirm('Deletar registro?');

            if (confirmation) {
                estado.destroyRecord();
            }
        }
    }
});
