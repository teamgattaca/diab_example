App.RESTAdapterStripXML.map('App.Patient', {
  id: { key: 'patientId' }
});

App.RESTAdapterStripXML.reopen({
  url: 'http://expression.ml.cmu.edu/',
  namespace: 'proxy/lifeGuy/services/predictionEngine'
});

App.Store = DS.Store.extend({
  revision: 12,
  adapter: 'App.RESTAdapterStripXML'
});

App.Router.map(function() {
});

App.Patient = DS.Model.extend({
  name: DS.attr('string'),
  age: DS.attr('number'),
  gender: DS.attr('string'),
  weight: DS.attr('number'),
  height: DS.attr('number')
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return App.Patient.find();
  }
});

App.IndexController = Ember.ArrayController.extend();
