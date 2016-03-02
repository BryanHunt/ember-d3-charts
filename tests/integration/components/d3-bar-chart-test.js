import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('d3-bar-chart', 'Integration | Component | d3 bar chart', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{d3-bar-chart}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#d3-bar-chart}}
      template block text
    {{/d3-bar-chart}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
