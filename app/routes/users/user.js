import Ember from 'ember';

export default Ember.Route.extend({
  model:function(param){
    return this.store.findRecord('user', param.user_id);
  }
});
