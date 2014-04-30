Basketball.PlayersController = Ember.ArrayController.extend({
  actions: {
    createPlayer: function() {
      var name = this.get('newPlayer');
      var player = this.store.createRecord('player', {
        name: name
      });
      this.set('newPlayer', '');
      player.save();
      // this.store.find('team', {'selected': true}).then(function(team) {
      //   console.log(team)
      //   player.set('team', team.get('name'));
      //   player.save();
      // });
    }
  }
});

