Basketball.PlayersController = Ember.ArrayController.extend({
  actions: {
    createPlayer: function(team) {
      var name = this.get('newPlayer');
      var player = this.store.createRecord('player', {
        name: name,
        team: team
      });
      this.set('newPlayer', '');
      player.save();
    }
  }
});
