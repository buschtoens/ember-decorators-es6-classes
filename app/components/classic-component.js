import Component from '@ember/component';
import { set } from '@ember/object';
import { computed } from 'ember-decorators/object';
import { on } from 'ember-decorators/object/evented';

export default Component.extend({
  params: null,

  foo: 'bar',

  setOnInit: null,

  setOnDidReceiveAttrs: null,

  @computed('foo', 'setOnInit', 'setOnDidReceiveAttrs')
  computed(foo, setOnInit, setOnDidReceiveAttrs) {
    return `${foo} - ${setOnInit} - ${setOnDidReceiveAttrs}`;
  },

  @on('init')
  eventedInit() {
    set(this, 'setOnInit', Date.now());
  },

  @on('didReceiveAttrs')
  eventedDidReceiveAttrs() {
    set(this, 'setOnDidReceiveAttrs', Date.now());
  }
}).reopenClass({
  positionalParams: 'params'
});
