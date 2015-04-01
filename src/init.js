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
      ($("body").height() -300 )* Math.random(),
      ($("body").width() -300)* Math.random(),
      5
    );
    dancers.push(dancer);
    $('body').append(dancer.$node);
    if(dancers.length===1){
      $(".dancer").addClass("first");
      console.log('in here');
    }
    $(".first").on('click',function(event){
      console.log('works');
    });
  });
$(".makeLine").on('click',function(event){
  for(var i=0;i<dancers.length;i++){
    dancers[i].setPosition(($("body").height()/2));
  }
});

  bigger = true;
$(".grow").on('click',function(event){
  for(var i=0;i<dancers.length;i++){
    if (bigger === true){
      dancers[i].$node.css({transform: 'scale(1.5,1.5)'});
      bigger = false;
    }
    else{
      dancers[i].$node.css({transform: 'scale(0.66667,0.66667)'});
      bigger = true;
    }
  }
});
//helper function for bouncing cat
scale = 1;
multiplier = 1;
var flag=true;
var top_init, left_init;
var temp=function(event){
   for(var i=0;i<dancers.length;i++){
    //console.log('hello world',dancers[i] instanceof makeCatDancer);

    if(dancers[i] instanceof makeCatDancer){
      if(flag){
        top_init=dancers[i].top;
        left_init=dancers[i].left;
        console.log('top init',top_init);
        flag=false;
      }
      // dancers[i].left += 2;
      scale *= multiplier;
      var transformed = "scale("+scale+","+scale+")";

      dancers[i].$node.css({transform: transformed});
      var topPosition = dancers[i].top + (0.1*Math.sin(new Date().getTime()/1000)*(($("body").height())));
      var leftPosition = dancers[i].left + (0.1*Math.cos(new Date().getTime()/1000)*(($("body").height())));
      // if (topPosition > $("body").height() ||topPosition < 100) {
      //   // topPosition = dancers[i].top;
      //   console.log('inside cat');
      // }
      if ((topPosition > (top_init+200)) ||(scale > 1.25)){
        // console.log('decreaased');
        multiplier = 0.95;
      }
      if ((topPosition< (top_init-200)) || (scale < 0.8)){
        // console.log('increeased');
        multiplier = 1.05;
      }
    // var leftPosition = Math.cos(new Date().getTime()/1000)*($("body").width()/5);
      dancers[i].setPosition(topPosition,leftPosition);
    }
    // setTimeout('')
  }
};


$('.bounce').on('click',function(){return setInterval(temp,200);});

$('.path').on('click',function(){
  //pick two random dancers
  var dancer_1=Math.random()*dancers.length;
  var dancer_2=Math.random()*dancers.length;

  // get their positions
  var top_1=dancers[dancer_1].top;
  var top_2=dancers[dancer_2].top;
  var left_1=dancers[dancer_1].left;
  var left_2=dancers[dancer_2].left;

  $( "#fireball" ).animate({
    left: "+=50"
  }, 1000, function() {
    // Animation complete.
  });


});



});




