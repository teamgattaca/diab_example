App = Ember.Application.create();

App.Store = DS.Store.extend({
  revision: 12,
  adapter: 'DS.RESTAdapter'
});

DS.RESTAdapter.map('App.Patient', {
  id: { key: 'patientId' }
});

App.Router.map(function() {
});

App.Patient = DS.Model.extend({
  name: DS.attr('string'),
  age: DS.attr('number'),
  gender: DS.attr('string'),
  weight: DS.attr('number'),
  height: DS.attr('number')
})

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return App.Patient.find();
  }
});

App.IndexController = Ember.ArrayController.extend();