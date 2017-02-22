// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

 
  el: '<canvas width="640" height="360"></canvas>',


  initialize: function() {
    
    this.model.on('play', function () {

    //  this.render();                                                                                                                          

    });
    this.render();                                                                                                                          
  },


  setSong: function(song) {
    this.model = song;
    //console.log('this is now the new this model', this.model);
    this.render();
  },

  render: function() {
    // return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }


});
