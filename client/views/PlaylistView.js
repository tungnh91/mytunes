var PlaylistView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    // set for sync, because when you sync you collection when parse dat that even triggers
    this.collection.on('sync', this.render, this);
    this.render();
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Playlist</th>').append(
      this.collection.map(function(song) {
        return new PlaylistEntryView({model: song}).render();
      })
    );
  }

});

