$( document ).ready(function(){
// selects random number to be shown at the start of the game on page load    
// Selects a random number to be shown at the start of the game
// Number should be should be between 19 - 120
    
let Random=Math.floor(Math.random()*101+19)

// appends the random number to the random number tag
$('#randomNumber').text(Random);

// Setting up random numbers for each food item

    let num1= Math.floor(Math.random()*11+1)
    let num2= Math.floor(Math.random()*11+1)
    let num3= Math.floor(Math.random()*11+1)
    let num4= Math.floor(Math.random()*11+1)

    // Random number has to be between 1 - 12

    let userTotal= 0; 
    let wins= 0;
    let losses = 0;
    //  Decaring variables for tallies
  $('#wins').text(wins);
  $('#losses').text(losses);
  //resets the game
  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalScore').text(userTotal);
        } 
  //adds the wins to the userTotal
  function yay(){
  alert("You won!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }
  //addes the losses to the userTotal
  function loser(){
  alert ("You lose!");
    losses++;
    $('#losses').text(losses);
    reset()
  }

//on click functions for the foods
    $('#one').on ('click', function(){
      userTotal = userTotal + num1;
      console.log("New userTotal= " + userTotal);
      $('#finalScore').text(userTotal); 
            //sets win/lose conditions
          if (userTotal === Random){
            yay();
          }
          else if ( userTotal > Random){
            loser();
          }   
    })  
    $('#two').on ('click', function(){
      userTotal = userTotal + num2;
      console.log("New userTotal= " + userTotal);
      $('#finalScore').text(userTotal); 
          if (userTotal === Random){
            yay();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#three').on ('click', function(){
      userTotal = userTotal + num3;
      console.log("New userTotal= " + userTotal);
      $('#finalScore').text(userTotal);
            if (userTotal === Random){
            yay();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#four').on ('click', function(){
      userTotal = userTotal + num4;
      console.log("New userTotal= " + userTotal);
      $('#finalScore').text(userTotal); 
        
            if (userTotal === Random){
            yay();
          }
          else if ( userTotal > Random){
            loser();
          }
    })})


//each gem has to have a value between 1-12
    //adds the wins to the userTotal
