import Component from '@ember/component';
import { set } from '@ember/object';
import { computed } from 'ember-decorators/object';
import { on } from 'ember-decorators/object/evented';

export default class extends Component{
  static create() {
    console.log('create', arguments, super.create);
    return super.create(...arguments);
  }

  static positionalParams = 'params';

  params = null;

  foo = 'bar';

  setOnInit = null;

  setOnDidReceiveAttrs = null;

  constructor() {
    console.log('constructor (pre super)');
    super();
    console.log('constructor (post super)', this.foo);
  }

  init() {
    super.init(...arguments);
    console.log('init', this.foo);
  }

  didReceiveAttrs()  {
    this._super(...arguments);
    console.log('didReceiveAttrs', this.foo);
  }

  @computed('foo', 'setOnInit')
  computed(foo, setOnInit) {
    return `${foo} - ${setOnInit}`;
  }

  @on('init')
  eventedInit() {
    set(this, 'setOnInit', Date.now());
  }

  @on('didReceiveAttrs')
  eventedDidReceiveAttrs() {
    set(this, 'setOnDidReceiveAttrs', Date.now());
  }
}
