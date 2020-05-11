function randcolor(){

  let n = '#'+Math.floor(Math.random()*16777215).toString(16);
  document.getElementById("resu").innerHTML = "HEXCODE: " + n;
  document.body.style.background = n;

};



