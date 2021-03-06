var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  makeDancer.call(this,top,left,timeBetweenSteps);
  // this.step();
  // this.top = top;
  // this.left = left;
  // this.timeBetweenSteps = timeBetweenSteps;
  console.log('blinky dancer arguments',arguments);


  //return blinkyDancer;
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    // this.step();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    var oldStep = makeDancer.prototype.step;
    oldStep.call(this);
    // var test=this.step.bind(this);

    this.$node.toggle();
    //console.log('test',test);
    // setTimeout(oldStep, 2000);

  };
