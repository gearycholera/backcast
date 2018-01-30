var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.empty();
    this.collection.forEach(this.renderVideo, this);
  },

  renderVideo: function(video) {
    var videoListEntryView = new VideoListEntryView({model: video});
    this.$el.append(videoListEntryView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
