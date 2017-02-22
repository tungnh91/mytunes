// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel, 

  initialize: function() {

    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      } else {
        ///
      }
    }, this); /// add this as third param

    // add ont that shifts
    // add one that plays first or does nothing (specify this)
    this.on('ended', this.shift);

    this.on('ended', function() {
      if (this.length > 0) {
        this.playFirst();
      } else {
        // Nothing
      }
    }, this);

    this.on('dequeue', function(id) {
      this.remove(id);
    }, this);
  },

  playFirst: function() {
    this.at(0).play();
  },

  
});

//confirmed