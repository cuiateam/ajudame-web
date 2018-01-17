import DS from 'ember-data';

export default DS.Model.extend({
  nome: DS.attr('string'),
  login: DS.attr('string'),
  email: DS.attr('string'),
  senha: DS.attr('string')
});
