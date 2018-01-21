import DS from 'ember-data';
import { match, gte, and } from '@ember/object/computed';

export default DS.Model.extend({
  nome: DS.attr('string'),
  email: DS.attr('string'),
  mensagem: DS.attr('string'),

  isValidEmail: match('email', /^.+@.+\..+$/),
  isMessageLongEnough: gte('mensagem.length', 10),

  isValid: and('isValidEmail', 'isMessageLongEnough')
});
