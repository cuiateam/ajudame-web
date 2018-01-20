import Route from '@ember/routing/route';

export default Route.extend({

    model(){
        return this.store.findAll('contato');
    },

    actions: {

        deleteContato(contato){
            let confirmation = confirm('Deletar registro?');

            if (confirmation) {
                contato.destroyRecord();
            }
        }
    }


});
