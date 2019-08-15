// selects random number to be shown at the start of the game on page load

$( document ).ready(function(){
    let Random = Math.floor(Math.random()*101+19)

    $('#randomNumber').text(Random)
// appends the random number to the random number tag

    let num1= Math.floor(Math.random()*11+1)


//each gem has to have a value between 1-12
    
    let userTotal= 0; 
    let wins= 0;
    let losses = 0;
//variables for the scores during the game

    $('#one').on ('click', function(){
        userTotal = userTotal + num1;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
    });
//on click functions for the foods


        
});
