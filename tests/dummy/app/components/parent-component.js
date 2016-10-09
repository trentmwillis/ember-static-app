import layout from '../templates/components/parent-component';
import ChildComponent from './child-component';

export default Ember.Component.extend({
  uses: [ ChildComponent ],
  layout
});