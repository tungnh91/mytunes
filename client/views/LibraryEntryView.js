// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td> <strong>Play Count:</strong> <%= count %></td>'),

  events: {
    'click': function() {
      this.model.play();
      this.model.enqueue();
      var num = this.model.get('count');
      this.model.set('count', num + '<i class="em em-heart"></i>');
      $('img').show();
      this.render();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});

//nothign noteworthy