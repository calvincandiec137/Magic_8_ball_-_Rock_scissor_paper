let username='Faiz';
console.log(username="string" ? "Hello,"+ username :"Hello!" );

let userQuestion='Will the 2nd round cap result be declared today?';
console.log(userQuestion);

let randomNumber=Math.floor(Math.random()*8);

let eightBall=""
 switch(randomNumber){
   case 0:
   console.log("It is certain");
   return;

    case 1:
   console.log("It is decidedly so");
   return;

    case 2:
   console.log("Reply hazy try again");
   return;

   case 3:
   console.log("Cannot predict now");
   return;

   case 4:
   console.log("Do not count on it");
   return;

   case 5:
   console.log("My sources say on");
   return;

   case 6:
   console.log("Outlook not so good");
   return;

   case 7:
   console.log("Sign point to yes");
   return;

   default:
   console.log("Try again!")
 }

 console.log(eightBall)