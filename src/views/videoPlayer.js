var VideoPlayerView = Backbone.View.extend({
  
  el: '.player',
  
  initialize: function() {
    this.listenTo(this.collection, 'select', this.selectedVideo);
  },
  
  selectedVideo: function(selection) {
    this.model = selection;
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
