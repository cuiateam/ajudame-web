import Route from '@ember/routing/route';

export default Route.extend({

    model(){
        return this.store.findAll('cidade');
    },

    actions: {

        deleteCidade(cidade){
            let confirmation = confirm('Deletar registro?');

            if (confirmation) {
                cidade.destroyRecord();
            }
        }
    }
});
