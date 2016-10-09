export function initialize(instance) {
  Ember.Component.reopen({
    init() {
      this._super(...arguments);
      Ember.assert('All components must specify their layout explicitly.', this.layout);
    },

    didRender() {
      this.childViews.forEach((view) => {
        const isComponent = this.uses && this.uses.find((component) => view instanceof component);
        Ember.assert(`The component '${view.toString()}' does not match any of the allowed components for '${this.toString()}.`, isComponent);
      });
    }
  });
}

export default {
  name: 'static-lookup',
  initialize
};
