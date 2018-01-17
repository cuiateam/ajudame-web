import { moduleForModel, test } from 'ember-qunit';

moduleForModel('cidade', 'Unit | Model | cidade', {
  // Specify the other units that are required for this test.
  needs: ['model:estado']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
