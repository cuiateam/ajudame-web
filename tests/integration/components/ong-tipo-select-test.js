import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ong-tipo-select', 'Integration | Component | ong tipo select', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ong-tipo-select}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ong-tipo-select}}
      template block text
    {{/ong-tipo-select}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
