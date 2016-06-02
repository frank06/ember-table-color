import Ember from 'ember';

export default Ember.Component.extend({
  
  tagName: 'tr',
  
  click() {
    this.$().parent().find('tr').removeClass('colored');
    this.$().addClass('colored');
  }
  
});
