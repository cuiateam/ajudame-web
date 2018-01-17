import DS from 'ember-data';

export default DS.Model.extend({
  nome: DS.attr('string'),
  descricao: DS.attr('string'),
  trabalhos: DS.attr('string'),
  favorecidos: DS.attr('string'),
  endereco: DS.attr('string'),
  localizacao: DS.attr('string'),
  cidade: DS.belongsTo('cidade'),
  ongTipo: DS.belongsTo('ong-tipo')
});
