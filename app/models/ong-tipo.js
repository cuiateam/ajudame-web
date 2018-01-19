import DS from 'ember-data';
import { notEmpty } from '@ember/object/computed';

export default DS.Model.extend({
  nome: DS.attr('string'),

  isValid: notEmpty('nome')
});
