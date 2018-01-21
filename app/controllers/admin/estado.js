import Controller from '@ember/controller';
import { sort } from '@ember/object/computed';

export default Controller.extend({
    sortProperties: Object.freeze(['nome:asc']),
    sortedModel: sort('model', 'sortProperties')
  });