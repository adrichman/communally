var schema = {};
Topic = schema['Topic'] = {};
TopicCategory = schema['TopicCategory'] = {};
Score = schema['Score'] = {};
Report = schema['Report'] = {};
Attachment = schema['Attachment'] = {};
ScaleUnit = schema['ScaleUnit'] = {};
ReportScale = schema['ReportScale'] = {};
ReportProperty = schema['ReportProperty'] = {};
User = schema['User'] = {};

var topLevel = [Topic,TopicCategory,Score,Report,Attachment,ScaleUnit,ReportScale,ReportProperty,User];
var topicChildren = ['Events','Transportation','Entertainment','Food_Drink','Other_Local_Places','Outside Destinations','User Submitted'];
  var topicEventsChildren = [['1',true],['2',true],['3',true],['4',true]]
  var topicTransportationChildren = [['6',true],['7',true],['8',true],['9',true],['10',true]]
  var topicEntertainmentChildren = [['1',true],['2',true],['3',true],['5',true]]
  var topicFoodDrinkChildren = [['11',true],['12',true]]
  var topicOtherLocalPlacesChildren = [[]]
  var topicOutsideDestinationChildren = [['13',true]]
  var topicUserSubmittedChildren = [['user_id',0]]

var topicGrandChildren = [topicEventsChildren, topicTransportationChildren, topicEntertainmentChildren, topicFoodDrinkChildren,topicOtherLocalPlacesChildren, topicOutsideDestinationChildren, topicUserSubmittedChildren]

for (var i = 0; i < topLevel.length; i++){
  schema[topLevel[i]] = {};
}


for (var j = 0; j < topicChildren.length; j++){
  schema['Topic'][topicChildren[j]] = {};
}

for (var g = 0; g < topicGrandChildren.length; g++){
  for (var h = 0; h < topicGrandChildren[g].length; h++){
    schema['Topic'][topicChildren[g]][topicGrandChildren[g][h][0]] = topicGrandChildren[g][h][1];
  }
}

var topicCategoryChildren = ['Sporting Events','Concerts and Performances','Festivals','Rallies','Exhibits','Traffic','Bike','Bus','Train','Airports','Restaurants','Bars','Parks'];

var n = 0;
while (n < 13){
  schema['TopicCategory'][n+1] = topicCategoryChildren[n];
  n++
}

//Score
var scoreChildren = [
                      ['report_id',0],
                      ['+1',0],
                      ['-1',0],
                      ['created_at',null],
                      ['updated_at',null]
                    ];

for (var s = 0; s < scoreChildren.length; s++){
  console.log(scoreChildren.length);
  console.log(scoreChildren[s]);
  schema['Score'][scoreChildren[s][0]] = scoreChildren[s][1]; 
}


var reportChildren = [['Slug',''],['user_id',0],['topic_id',0],['scale_unit_id',0],['property_id',0],['location',''],['score',0],['comments',''],['attachment_id',{}],['created_at',''],['updated_at','']]

for (var r = 0; r < reportChildren.length; r++){

  schema['Report'][reportChildren[r][0]] = reportChildren[r][1]; 
}


var attachmentChildren = [[]]

schema['Attachment'] = [[]];

var scaleUnitChildren = [['1','time'],['2','percentage'],['3','size'],['4','custom']];

for (var sc = 0; sc < scaleUnitChildren.length; sc++){

  schema['ScaleUnit'][scaleUnitChildren[sc][0]] = scaleUnitChildren[sc][1]; 
}

var reportScaleChildren = [['1','small'],['2','medium'],['3','large'],['4','extra-large']]

for (var rsc = 0; rsc < reportScaleChildren.length; rsc++){

  schema['ReportScale'][reportScaleChildren[rsc][0]] = reportScaleChildren[rsc][1]; 
}

var reportPropertyChildren = [['1','wait time'],['2','crowd size'],['3','capacity']]

for (var rpc = 0; rpc < reportPropertyChildren.length; rpc++){

  schema['ReportProperty'][reportPropertyChildren[rpc][0]] = reportPropertyChildren[rpc][1]; 
}

var userChildren =  [['name',''],['created_at',''],['city',''],['state',''],['password_hash',''],['password_salt','']]

for (var uc = 0; uc < userChildren.length; uc++){
  
  schema['User'][userChildren[uc][0]] = userChildren[uc][1]; 
}

JSON.stringify(schema);
