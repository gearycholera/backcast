var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();
    
    
    var videos = new Videos(window.exampleVideoData);
    
    this.videoList = new VideoListView({
      collection: videos
    }).render();
    
    this.videoPlayer = new VideoPlayerView({
      model: videos.at(0),
      collection: videos
    }).render();
    
    this.searchView = new SearchView({
      collection: videos
    }).render();

  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },


  template: templateURL('src/templates/app.html')

});
