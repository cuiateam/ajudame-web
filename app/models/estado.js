import DS from 'ember-data';
import { notEmpty, equal, and } from '@ember/object/computed';

export default DS.Model.extend({
  nome: DS.attr('string'),
  sigla: DS.attr('string'),

  isValidNome: notEmpty('nome'),
  isValidSigla: equal('sigla.length', 2),
  isValid: and('isValidNome', 'isValidSigla')
});
