import DS from 'ember-data';
import { notEmpty } from '@ember/object/computed';

export default DS.Model.extend({
  nome: DS.attr('string'),
  descricao: DS.attr('string'),  
  telefone: DS.attr('string'),
  email: DS.attr('string'),
  site: DS.attr('string'),
  facebook: DS.attr('string'),
  instagram: DS.attr('string'),  
  trabalhos: DS.attr('string'),
  favorecidos: DS.attr('string'),
  endereco: DS.attr('string'),
  localizacao: DS.attr('string'),
  cidade: DS.belongsTo('cidade'),
  ongTipo: DS.belongsTo('ong-tipo'),

  hasNome: notEmpty('nome'),
  hasDescricao: notEmpty('descricao'),
  hasTelefone: notEmpty('telefone'),
  hasEmail: notEmpty('email'),
  hasSite: notEmpty('site'),
  hasFacebook: notEmpty('facebook'),
  hasInstagram: notEmpty('instagram'),
  hasTrabalhos: notEmpty('trabalhos'),
  hasFavorecidos: notEmpty('favorecidos'),
  hasEndereco: notEmpty('endereco'),
  hasLocalizacao: notEmpty('localizacao'),
  hasCidade: notEmpty('cidade'),
  hasOngTipo: notEmpty('ongTipo')
});
