var SearchView = Backbone.View.extend({
  initialize: function() {
  },
  
  el: '.search',
  
  events: {
    'click .btn': 'searchVideos',
    
    'keypress .form-control': 'enter'
  },
  
  enter: function(e) {
    if (e.keyCode === 13) {
      this.searchVideos();
    }
  },
  
  searchVideos: function() {
    var searchValue = $('input').val().trim();
    this.collection.search(searchValue);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
