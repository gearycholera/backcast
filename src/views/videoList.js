var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    
    this.listenTo(this.collection, 'sync', this.render);
    
  },
  
  el: '.list',

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$el.find('video-list').empty();
    
    for (var i = 0; i < this.collection.length; i++) {
      var videoListEntry = new VideoListEntryView({
        model: this.collection.models[i]
      });
      $('.video-list').append(videoListEntry.render());
    }
    
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
