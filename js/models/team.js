Basketball.Team = DS.Model.extend({
  players: DS.hasMany('player'),
  name: DS.attr(),
  selected: DS.attr('boolean', { defaultValue: false })
});


