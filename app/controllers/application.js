import Ember from 'ember';

export default Ember.Controller.extend({
  
  filteredItems: Ember.computed(() => {
    return [
      { title: "Item 1" },
      { title: "Item 2" },
      { title: "Item 3" },
      { title: "Item 4" }
    ]
  }),
  
  wrappedFilteredItems: Ember.computed('filteredItems.@each', function() {
    return this.get('filteredItems').map(item => {
      return Ember.Object.create({ // wrapper object
        item: item,
        colored: null
      });
    });
  })
  
});
