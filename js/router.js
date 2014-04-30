Basketball.Router.map(function() {
  this.resource('teams', { path: '/' }), function() {
    this.route('player');
  }
});

Basketball.TeamsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('team');
  }
});
