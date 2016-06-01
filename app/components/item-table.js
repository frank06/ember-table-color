import Ember from 'ember';

export default Ember.Component.extend({
  
  actions: {
    
    assignColor(item) {
      this.get('model').forEach((wrapper) => {
        if (wrapper.get('item') === item) {
          wrapper.set('colored', 'colored');
        } else {
          wrapper.set('colored', null);
        }
      })
      
    }
    
  }
  
});
