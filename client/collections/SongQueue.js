// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function() {
      if (this.length > 1) {
        this.shift();
        this.playFirst();
      } else if (this.length === 1) {
        this.shift();
      }
    });

    this.on('dequeue', function(id) {
      this.remove(id);
    });
  },

  playFirst: function() {
    if (this.length >= 1) {
      this.at(0).play();
    }
  },

  
});