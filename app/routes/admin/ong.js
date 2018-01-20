import Route from '@ember/routing/route';

export default Route.extend({

    model() {
        return this.store.findAll('ong');
    },

    actions: {
        deleteOng(ong){
            let confirmation = confirm('Deletar registro?');

            if(confirmation){
                ong.destroyRecord();
            }
        }
    }
});
