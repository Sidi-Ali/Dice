function roll(){
    var n = Math.floor(Math.random() * 6) + 1;
    var w = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src","images/dice"+ n +".png");
    document.querySelector(".img2").setAttribute("src","images/dice"+ w +".png");

    if (n === w){
      document.querySelector("h1").innerHTML ="Draw";
    }
    else if (n > w){
      document.querySelector("h1").innerHTML = "🎈Player 1 wins";
    }
    else if (n < w ){
      document.querySelector("h1").innerHTML = "Player 2 wins 🎈";
    }
}

roll();


























// var i = Math.floor(Math.random()*6) + 1;
// var j = Math.floor(Math.random()*6) + 1;
//
// document.querySelector(".img1").setAttribute("src","images/dice" + i + ".png");
// document.querySelector(".img2").setAttribute("src","images/dice" + j + ".png");
//
// if ( i > j ){
//   document.querySelector("h1").innerHTML = "❤Player1 wins!";
// }
// else if (i < j) {
//     document.querySelector("h1").innerHTML = "Player2 wins❤";
// }
// else{
//   document.querySelector("h1").innerHTML = "Draw!";
// }




// var i = Math.floor(Math.random() * 6 ) + 1 ;
// var j = Math.floor(Math.random() * 6 ) + 1 ;
// document.querySelector(".img1").setAttribute("src", "images/dice" + i + ".png");
// document.querySelector(".img2").setAttribute("src", "images/dice" + j + ".png");
//
// if ( i < j ){
//   document.querySelector("h1").innerHTML = "Player 2 wins 🎈";
// }
// else if ( j < i) {
//   document.querySelector("h1").innerHTML = "🎈Player 1 wins";
// }
// else if ( i === j ) {
//   document.querySelector("h1").innerHTML = "Draw!";
// }
// else{
//   console.log(i, j);
// }




















//Percentages calculator
// var a = prompt ("number");
// var b= 26;
//
//  var answer = Math.round((a/b)*100);
// //  alert(answer+" % of participants");
// document.addEventListener("keydown",function(y){
//   console.log(y);
// });
