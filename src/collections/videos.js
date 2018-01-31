var Videos = Backbone.Collection.extend({

  model: Video,
  
  url: 'https://www.googleapis.com/youtube/v3/search',
  
  search: function(input) {
    this.fetch({
      data: {
        maxResults: 5,
        part: 'snippet',
        key: 'AIzaSyDgb6RGFdR2Bf7bL_NjGZzYdGA3I1J3-6w',
        videoEmbeddable: true,
        type: 'video',
        q: input
      }
    }); 
  },
  
  parse: function(response) {
    return response.items;
  }

});
