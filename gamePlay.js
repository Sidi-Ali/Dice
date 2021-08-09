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

document.querySelector("button").addEventListener("click", function() {
  roll();
});
