import Route from '@ember/routing/route';

export default Route.extend({

    model(){
        return this.store.findAll('ong-tipo');
    },

    actions: {
        
        deleteOngTipo(tipoOng) { 
            let confirmation = confirm('Deletar registro?');

            if(confirmation){
                tipoOng.destroyRecord();
            }
        }
    }
});
