import Controller from '@ember/controller';
import { sort } from '@ember/object/computed';

export default Controller.extend({
    sortProperties: Object.freeze(['nome:asc']),
    sortedCidades: sort('cidades', 'sortProperties'),
    sortedOngTipos: sort('ongTipos', 'sortProperties'),

});
