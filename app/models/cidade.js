import DS from 'ember-data';
import { not, notEmpty, and } from '@ember/object/computed';

export default DS.Model.extend({
  nome: DS.attr('string'),
  estado: DS.belongsTo('estado'),

  isValidNome: notEmpty('nome'),
  isValidEstado: not('0'),
  isValid: and('isValidNome', 'isValidEstado')
});
