// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  // var dancer = {};
  // use jQuery to create an HTML <span> tag

  // this.$node = $('<span class="dancer"><img src = "http://media.tumblr.com/tumblr_m8y2dc75wk1r7nv07o1_400.gif"/> </span>');
  this.$node = $('<span class="dancer"><img src = "http://media.giphy.com/media/KoUU7xo4SiYpO/giphy.gif"/> </span>');

  // dancer.step = function(){
  //   // the basic dancer doesn't do anything interesting at all on each step,
  //   // it just schedules the next step
  //   setTimeout(dancer.step, timeBetweenSteps);
  // };

  this.step();

  // dancer.setPosition = function(top, left){
  //   // Use css top and left properties to position our <span> tag
  //   // where it belongs on the page. See http://api.jquery.com/css/
  //   //
  //   var styleSettings = {
  //     top: top,
  //     left: left
  //   };
  //   dancer.$node.css(styleSettings);
  // };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(this.top, this.left);

  console.log('dancer arguments',arguments);
  // return dancer;
};

makeDancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  //console.log('time between',this.timeBetweenSteps);

  var test = this.step.bind(this);
  //console.log('test',test);
  setTimeout(test, this.timeBetweenSteps);
  //this.step();
};

makeDancer.prototype.setPosition = function(top,left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  // console.log( 'left :'+left+' top :'+top);
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
