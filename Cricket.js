var player=prompt("Enter your name:");
var toss=confirm("Do you want to Bat first ?");
if(toss==false)
{
var ball=confirm("Do you want to bowl first ?");
}
if(ball==false)
{
  var quit=confirm("Do you want to quit the game ?");
}
if(quit==true)
{
alert("Thanks for comming...! Come again if you are bored..!");
}
if(quit==false)
{
  var toss1=confirm("Do you want to Bat First ?");
  toss=toss1;
}
if(toss1==false){
  alert("Thanks for comming...! Come again if you are bored..!")
}
var flag;
var runs1=0;
var runs2=0;
var ini=0;
var win=0;
//After toss
if(toss==true){
  flag="BAT";
  if((player==null)||(player=='')){
    document.getElementById('pname').innerHTML="<b> Guest </b>";
  }
  else{
    document.getElementById('pname').innerHTML="<b>"+player+"</b>";
  }
  document.getElementById('cname').innerHTML="<b>Mr.computer</b>";
  document.getElementById('pl2').disabled=false;
  document.getElementById('pl2').innerHTML="BAT";
  document.getElementById('p1').innerHTML="0";
  document.getElementById('p2').innerHTML="0";
  document.getElementById("p1").style.background="#ffb13d";
  document.getElementById("p2").style.background="#ffb13d";
  document.getElementsByTagName('body')[0].style.background="green";
}
if(ball==true){
  flag="BALL";
  if((player==null)||(player=='')){
    document.getElementById('pname').innerHTML="<b> Guest </b>";
  }
  else{
    document.getElementById('pname').innerHTML="<b>"+player+"</b>";
  }
  document.getElementById('cname').innerHTML="<b>Mr.Computer</b>";
  document.getElementById('pl2').disabled=false;
  document.getElementById('pl2').innerHTML="BOWL";
  document.getElementById('p1').innerHTML="0";
  document.getElementById('p2').innerHTML="0";
  document.getElementById("p1").style.background="#ffb13d";
  document.getElementById("p2").style.background="#ffb13d";
  document.getElementsByTagName('body')[0].style.background="green";
}

function bats()
{
  var min=0;
  var max=6;
  var run=Math.floor(Math.random()*(max-min))+1;
  document.getElementById('p1').innerHTML=run;
}
function bowls()
{
  var min=0;
  var max=6;
  var run=Math.floor(Math.random()*(max-min))+1;
  document.getElementById('p2').innerHTML=run;
}
function out(){
  var run1=document.getElementById('p1').innerHTML;
  var run2=document.getElementById('p2').innerHTML;
  if(run1===run2)
  {
    document.getElementById('out').innerHTML="OUT";
    document.getElementById('out').style.fontWeight="900";
    document.getElementById('out').style.color="red";
    document.getElementById('pl2').disabled=true;
  }
}
function inings(){
  var ans;
  var run1=document.getElementById('out').innerHTML;
  if((run1==='OUT')||(win===1)){
    ini=ini+1;
    if(ini===1)
    {
    setTimeout(function(){alert("End of Innings")},1000);
    setTimeout(function(){ans=confirm("Are you ready for second innings?")},2000);
    setTimeout(function(){
    if(ans==true)
     {
       document.getElementById("out").innerHTML='';
       document.getElementById('p1').innerHTML='0';
       document.getElementById('p2').innerHTML='0';
       if(flag=="BAT"){
          flag="BALL";
          runs2=0;
          document.getElementById('pl2').innerHTML="BOWL";
          document.getElementById('pl2').disabled=false;
          target();
          }
          else {
          flag="BAT";
          runs1=0;
          document.getElementById('pl2').innerHTML="BAT";
          document.getElementById('pl2').disabled=false;
          target();
          }
     }else{
       alert("Thanks for comming...! Try to Play the second innings from the next Game");
     }},3000);
  }
  else{
    cname=document.getElementById('cname').innerHTML;
    pname=document.getElementById('pname').innerHTML;
    if(runs1<runs2){
    document.getElementById("win").innerHTML="<h1>"+cname+" WON</h1>";
    document.getElementById("win").style.color="#fc4305";
  }
    else{
      document.getElementById("win").innerHTML="<h1>"+pname+" WON</h1>";
      document.getElementById("win").style.color="#fc4305";
    }
    if(runs1===runs2){
      document.getElementById("win").innerHTML="<h1>DRAW</h1>"
    }
  }
}
}

function calculate()
{
  if(flag=="BAT"){
    outs=document.getElementById('out').innerHTML;
    if(outs!=="OUT"){
    run=document.getElementById('p1').innerHTML;
    runs1=runs1+parseInt(run);
    document.getElementById('pscore').innerHTML=runs1;
    if(ini===1)
    {
      if(runs1>runs2)
      {
        document.getElementById('pl2').disabled=true;
        win=1;
        inings();
      }
    }
  }
  }
  if(flag=="BALL"){
    outs=document.getElementById('out').innerHTML;
    if(outs!=="OUT"){
    run2=document.getElementById('p2').innerHTML;
    runs2=runs2+parseInt(run2);
    document.getElementById('cscore').innerHTML=runs2;
    if(ini===1)
    {
      if(runs2>runs1)
      {
        document.getElementById('pl2').disabled=true;
        win=1;
        inings();
      }
    }
  }
  }
}
function target(){
  cname=document.getElementById('cname').innerHTML;
  pname=document.getElementById('pname').innerHTML;
  if((ini===1)&&(flag=="BAT"))
  {
    if(runs2>runs1){
      runs=(runs2-runs1)+1;
      document.getElementById('win').innerHTML=pname+" needs "+runs+" to win"
    }
    if(runs2==runs1){
      document.getElementById('win').innerHTML=pname+" needs 1 run to win"
    }
  }
  if((ini===1)&&(flag=="BALL"))
  {
    if(runs1>runs2){
      runs=(runs1-runs2)+1;
      document.getElementById('win').innerHTML=cname+" needs "+runs+" to win"
    }
    if(runs2==runs1){
      document.getElementById('win').innerHTML=cname+" needs 1 run to win"
    }
  }
}
