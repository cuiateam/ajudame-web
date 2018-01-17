import DS from 'ember-data';

export default DS.Model.extend({
  nome: DS.attr('string'),
  email: DS.attr('string'),
  mensagem: DS.attr('string')
});
