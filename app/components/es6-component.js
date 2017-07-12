import Component from '@ember/component';
import { set } from '@ember/object';
import { computed } from 'ember-decorators/object';
import { on } from 'ember-decorators/object/evented';

export default class extends Component{
  static positionalParams = 'params';

  params = null;

  foo = 'bar';

  setOnInit = null;

  setOnDidReceiveAttrs = null;

  constructor() {
    super();
    console.log('constructor', this.foo);
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
