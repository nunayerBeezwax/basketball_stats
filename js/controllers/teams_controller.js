Basketball.TeamsController = Ember.ArrayController.extend({
  actions: {
    createTeam: function() {
      var name = this.get('newTeam');
      var team = this.store.createRecord('team', {
        name: name
      });
      this.set('newTeam', '');
      team.save();
    },
    teamSelect: function(team) {
      team.set('selected', true);
    },
    addPlayerToTeam: function() {
      var team = this.store.find('team', {'selected': true})
      team.players.pushObject(player)
      team.save()
    }
  }
});
