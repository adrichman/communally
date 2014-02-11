AppView = Backbone.View.extend({
  template: _.template("<div class='container-fluid'><header><h1 class='h1'>communally</h1><h4>crowd-source all of the places and things</h4></header>" +
    "<nav><div class='row row-fluid'><div class='col-xs-6 col-sm-4'>Report</div><div class='col-xs-6 col-sm-4'>Research</div><div class='col-xs-6 col-sm-4'>What's Hot</div></div></nav>" +
    "</div>"),
  // events:{
         
  // },
  el: $("#App"),

  initialize: function(){
    // var Topics = new TopicsList;  
    // this.listenTo(Topics, 'add', this.addOne);
    // this.listenTo(Topics, 'reset', this.addAll);
    // this.listenTo(Topics, 'all', this.render);
    // setInterval(Topics.fetch.bind(Topics), 1000);
    this.render()
  },

  render: function(){
    this.$el.children().detach();
    console.log(this.$el)
    this.$el.append(this.template());
    // this.$el.append(this.topicsView.$el);
    // this.$el.append(this.reportsView.$el);
  // // },
  // addOne: function(topic) {
  //     var view = new TopicView({model: Topic});
  //     this.$el.append(view.render().el);
  //   },

  // // Add all items in the **topics** collection at once.
  // addAll: function() {
  //   // this.$el.html("");
  //   Topics.each(this.addOne, this);
  }
  
});

