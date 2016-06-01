import Ember from 'ember';

export default Ember.Controller.extend({
  
  actions: {
    
    assignColor(item) {
      this.get('wrappedFilteredItems').forEach((wrapper) => {
        if (wrapper.get('item') === item) {
          wrapper.set('colored', 'colored');
        } else {
          wrapper.set('colored', null);
        }
      })
      
    }
    
  },
  
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
