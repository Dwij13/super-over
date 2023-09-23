var a =document.querySelector("#strike");
var b =document.querySelector("#reset");
var c =document.getElementById("score-team1");
var d =document.getElementById("score-team2");
var e =document.getElementById("wicket-team1");
var f =document.getElementById("wicket-team2");
var g = new Audio("http://bit.ly/so-ball-hit");
var h = new Audio("http://bit.ly/so-crowd-cheer");
var team1score = 0;
var team2score = 0;
var team1wicket = 0;
var team2wicket = 0;
var team1balls =0;
var team2balls =0;
var turn=1;
var posrun =[0,1,2,3,4,6,"W"]
a.addEventListener("click",work)
function work(){
  g.pause();//pause the previous audio
  g.currentTime=0;//set the time to 0
  g.play();
  
  var randomness = Math.random();//this will creat random value from 0-1
  var random1= randomness*posrun.length;
  var randomindex = Math.floor(random1);
  var randomvalue= posrun[randomindex];
  // pak batting
  if(turn == 2){
    team2balls++;
    var bal = document.querySelector(`#team2 div:nth-child(${team2balls})`)
    bal.innerHTML = randomvalue;
  
    if(randomvalue == "W"){
      team2wicket++;
    }
    else{
      team2score = team2score + randomvalue;
    }
    if(team2score > team1score || team2wicket == 2 || team2balls == 6){
      turn = 3;

      setTimeout(()=>{
      gameOver();
    },10);
  }
    updateScore()
  }
  //INDIA batting
  if(turn==1){
    team1balls++;
    var bal = document.querySelector(`#team1 div:nth-child(${team1balls})`)
    bal.innerHTML= randomvalue;
    if(randomvalue == "W"){
      team1wicket++;
    }
    else{
      team1score = team1score + randomvalue;
    }
    if(team1balls == 6 || team1wicket == 2){
      turn = 2;
    }
    updateScore();
  }
}


function updateScore(){
c.innerHTML = team1score;
e.innerHTML = team1wicket;
d.innerHTML = team2score;
f.innerHTML = team2wicket;
}

function gameOver(){
  if(team1score>team2score)
  {
    alert("INDIA WINS")
  }
  else if(team2score > team1score){
  alert("PAKISTAN WINS")

}
else
 alert("Draw")
document.querySelectorAll(".ball").forEach(e=>{
  if(e.innerHTML=="")
{
  
  e.innerHTML="X"
  e.style.backgroundColor="grey"
}
})

h.pause();
h.currentTime=0;
h.play()
}

b.addEventListener("click",resetfunction)
function resetfunction(){
  window.location.reload()
}