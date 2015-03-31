$(document).ready(function(){
  window.dancers = [];
  // console.log('dfsfsd',makeBlinkyDancer);
  // window.makeBlinkyDancer = makeBlinkyDancer;
  // console.log(window.makeBlinkyDancer);
  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    console.log(dancerMakerFunctionName);
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      50
    );
    dancers.push(dancer);
    $('body').append(dancer.$node);
  });
$(".makeLine").on('click',function(event){
  for(var i=0;i<dancers.length;i++){
    dancers[i].setPosition(($("body").height()/2));
  }
});

$(".grow").on('click',function(event){
  // bigger = true;
  for(var i=0;i<dancers.length;i++){
    if (dancers[i].$node.css.size !== "BIG"){
      dancers[i].$node.css({'size': "BIG", transform: 'scale(1.5,1.5)'});
    }
    else{
      dancers[i].$node.css({'size': "SMALL", transform: 'scale(0.66667,0.66667)'});
    }
  }
  // bigger = false;
});
var temp=function(event){
   for(var i=0;i<dancers.length;i++){
    console.log(dancers[i] instanceof makeCatDancer);
    if(dancers[i] instanceof makeCatDancer){
      dancers[i].left += 2;
      var topPosition = dancers[i].top + (0.3*Math.sin(new Date().getTime()/1000)*(($("body").height())));
      if (topPosition > $("body").height() ||topPosition < 200) {
        topPosition = dancers[i].top;
      }
    // var leftPosition = Math.cos(new Date().getTime()/1000)*($("body").width()/5);
      dancers[i].setPosition(topPosition,dancers[i].left);
    }
    // setTimeout('')
  }
};

$('.bounce').on('click',function(){return setInterval(temp,200);});
});

