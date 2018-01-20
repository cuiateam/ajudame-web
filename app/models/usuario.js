import DS from 'ember-data';
import { match, gte, and, not} from '@ember/object/computed';

export default DS.Model.extend({
  nome: DS.attr('string'),
  login: DS.attr('string'),
  email: DS.attr('string'),
  senha: DS.attr('string'),

  isValidEmail: match('email', /^.+@.+\..+$/),
  isPasswordLongEnough: gte('senha.length', 10),

  isValid: and('isValidEmail', 'isPasswordLongEnough'),
  isDisabled: not('isValid')
});
