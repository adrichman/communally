var TopicsList = Backbone.Firebase.Collection.extend({
  model: Topic,

  firebase: new Backbone.Firebase("https://communally.firebaseio.com/"),

  initialize: function(){

  // },

  //     // Filter down the list of all todo items that are finished.
  // done: function() {
  //   return this.filter(function(topic){ return topic.get('done'); });
  // },

  // // Filter down the list to only todo items that are still not finished.
  // remaining: function() {
  //   return this.without.apply(this, this.done());
  }
});