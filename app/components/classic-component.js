import Component from '@ember/component';
import { set } from '@ember/object';
import { computed } from 'ember-decorators/object';
import { on } from 'ember-decorators/object/evented';

export default Component.extend({
  params: null,

  foo: 'bar',

  setOnInit: null,

  @computed('foo', 'setOnInit')
  computed(foo, setOnInit) {
    return `${foo} - ${setOnInit}`;
  },

  @on('init')
  eventedInit() {
    set(this, 'setOnInit', Date.now());
  }
}).reopenClass({
  positionalParams: 'params'
});
