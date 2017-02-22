// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',
//   el: [ '<div id="jquery_jplayer_1" class="jp-jplayer"></div>',
// '<div id="jp_container_1" class="jp-audio" role="application" aria-label="media player">',
//   '<div class="jp-type-single">',
//     '<div class="jp-gui jp-interface">',
//       '<div class="jp-volume-controls">',
//         '<button class="jp-mute" role="button" tabindex="0">mute</button>',
//         '<button class="jp-volume-max" role="button" tabindex="0">max volume</button>',
//         '<div class="jp-volume-bar">',
//           '<div class="jp-volume-bar-value"></div>',
//         '</div>',//       '</div>',
//       '<div class="jp-controls-holder">',
//         '<div class="jp-controls">',
//           '<button class="jp-play" role="button" tabindex="0">play</button>',
//           '<button class="jp-stop" role="button" tabindex="0">stop</button>',
//         '</div>',
//         '<div class="jp-progress">',
//           '<div class="jp-seek-bar">',
//             '<div class="jp-play-bar"></div>',
//           '</div>',
//         '</div>',
//         '<div class="jp-current-time" role="timer" aria-label="time">&nbsp;</div>',
//         '<div class="jp-duration" role="timer" aria-label="duration">&nbsp;</div>',
//         '<div class="jp-toggles">',
//           '<button class="jp-repeat" role="button" tabindex="0">repeat</button>',
//         '</div>',
//       '</div>',
//     '</div>',
//     '<div class="jp-details">',
//       '<div class="jp-title" aria-label="title">&nbsp;</div>',
//     '</div>',
//    ' <div class="jp-no-solution">',
//       '<span>Update Required</span>',
//      ' To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.',
//    ' </div>',
//   '</div>',
// '</div>'].join(''),

  initialize: function() {
    var context = this;
    this.$el.on('ended', function() {
      context.model.ended();
      $('img').hide();
    });

    this.$el.on('click', function(){
      $('img').toggle();
    });    

  },


  setSong: function(song) {
    this.model = song;
    //console.log('this is now the new this model', this.model);
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }


});
