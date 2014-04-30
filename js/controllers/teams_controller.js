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
    }
  }
});
