var Reports = Backbone.Firebase.Collection.extend({
  model: Report,
  firebase: "https://communally.firebaseio.com/",
  initialize: function(){
    // var Reports = new Reports;
    // this.listenTo(Reports, 'add', this.addOne);
    // this.listenTo(Reports, 'reset', this.addAll)
    // this.listenTo(Reports, 'all', this.render);
  // },

  //     // Filter down the list of all todo items that are finished.
  // done: function() {
  //   return this.filter(function(Report){ return Report.get('done'); });
  // },

  // // Filter down the list to only todo items that are still not finished.
  // remaining: function() {
  //   return this.without.apply(this, this.done());
  }


});