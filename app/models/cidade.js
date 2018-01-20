import DS from 'ember-data';
import { notEmpty } from '@ember/object/computed';

export default DS.Model.extend({
  nome: DS.attr('string'),
  estado: DS.belongsTo('estado'),

  isValid: notEmpty('nome')
});
