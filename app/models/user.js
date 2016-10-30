import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  username: DS.attr(),
  mail: DS.attr(),
  picture: DS.attr(),
});
