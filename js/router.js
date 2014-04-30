Basketball.Router.map(function() {
  this.resource('teams', { path: '/' }), function() {
    this.route('players');
  }
});

Basketball.TeamsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('team');
  }
});

Basketball.PlayersRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('player');
  }
});
