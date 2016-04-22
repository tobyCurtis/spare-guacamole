$(document).ready
(
  function()
  {
    window.figure = function()
    {
      //get my values from the text box
      var due = $("#amountDue").val();
      var given = $("#amountGiven").val();
      
      //difference that will be subtracted from
      var difference = given - due;
      difference = Math.round(difference * 100) / 100;
      
      //original difference
      var oDifference = difference;
   
      var dollar = 0, quarter = 0, dime = 0, nickel = 0, penny = 0;  
      
      var amounts = [1, 0.25, 0.10, 0.05, 0.01];
      var currencies = [0, 0, 0, 0, 0];
      
      for (var i = 0; i < amounts.length ; i++)
      {
        while( amounts[i] <= difference )
        {
          currencies[i]++;
          difference -= amounts[i] ;
          difference = Math.round(difference * 100) / 100;
        }
      }
       $("#outputDollars").text(currencies[0]);
       $("#outputQuarters").text(currencies[1]);
       $("#outputDimes").text(currencies[2]);
       $("#outputNickels").text(currencies[3]);
       $("#outputPennies").text(currencies[4]);                  
      
 alert(oDifference + " is the total amount of change, and you get " + currencies[0] + " dollars " + currencies[1] + " quarters " + currencies[2] + " dimes " + currencies[3] + " nickels " + currencies[4] + " pennys");
      
      
//      
//      while( 1 <= difference )
//      {
//        dollar++;
//        difference--;
//        difference = Math.round(difference * 100) / 100;
//      }
//      
//      while( 0.25 <= difference )
//      {
//        
//        quarter++;
//        difference -= 0.25;
//        difference = Math.round(difference * 100) / 100;
//      }
//      
//       while( 0.10 <= difference )
//      {    
//        dime++;
//        difference -= 0.10;
//        difference = Math.round(difference * 100) / 100;
//      }
//      
//       while( 0.05 <= difference) 
//      {        
//        nickel++;
//        difference -= 0.05;
//        difference = Math.round(difference * 100) / 100;
//      }
//       
//      while( 0.01 <= difference )
//      { 
//        penny++;
//        difference -= 0.01; 
//        difference = Math.round(difference * 100) / 100;
//      }
 

    }  
  
  
  
  }
);
