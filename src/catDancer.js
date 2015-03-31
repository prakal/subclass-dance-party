var makeCatDancer = function(top, left, timeBetweenSteps){
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  makeDancer.call(this,top,left,timeBetweenSteps);
  this.$node = $('<span class="dancer"><img src = "https://s-media-cache-ak0.pinimg.com/originals/5d/93/c0/5d93c04122701e89f2d839d0e80e5a71.jpg"/> </span>');
  this.setPosition(top,left);
  // this.step();
  // this.top = top;
  // this.left = left;
  // this.timeBetweenSteps = timeBetweenSteps;
  console.log('cat dancer arguments',arguments);


  //return blinkyDancer;
};

makeCatDancer.prototype = Object.create(makeDancer.prototype);
makeCatDancer.prototype.constructor = makeCatDancer;

makeCatDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    // this.step();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    var oldStep = makeDancer.prototype.step;
    oldStep.call(this);
    // var test=this.step.bind(this);
    // this.top -= 2;
    /*this.left += 2;
    var topPosition = this.top + Math.sin(new Date().getTime()/1000)*($("body").height()/3);
    // var leftPosition = Math.cos(new Date().getTime()/1000)*($("body").width()/5);
    this.setPosition(topPosition,this.left);*/
    // this.setPosition(this.top,this.left);
    //console.log('test',test);
    // setTimeout(oldStep, 2000);

  };
