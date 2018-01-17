import { moduleForModel, test } from 'ember-qunit';

moduleForModel('ong', 'Unit | Model | ong', {
  // Specify the other units that are required for this test.
  needs: ['model:cidade', 'model:ong-tipo']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
