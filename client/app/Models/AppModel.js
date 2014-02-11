AppModel = Backbone.Model.extend({
  initialize: function(){
    this.set('topicsList'), topicsList = new TopicsList();
    this.set('reportsList'), reportsList = new Reports();
    // this.set('dealerHand'), deck.dealDealer()

  }
});