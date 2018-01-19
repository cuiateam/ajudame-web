import Route from '@ember/routing/route';

export default Route.extend({

    model(){
        return {
            tabs: [
                { name: 'ONG', route: 'admin.ong'},
                { name: 'ONG Tipo', route: 'admin.ong-tipo'},
                { name: 'Usuário', route: 'admin.usuario'},               
                { name: 'Cidade', route: 'admin.cidade'},
                { name: 'Estado', route: 'admin.estado'},
                { name: 'Contato', route: 'admin.contato'}
            ]
        }
    }
});
