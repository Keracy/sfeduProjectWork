let turn = 0;
  function next(){
    if(turn % 2 == 0){
      document.getElementById("project2").style = "display:none;";
      document.getElementById("project1").style = "display:block";
      turn++;
    }
    else{
      document.getElementById("project1").style = "display:none;";
      document.getElementById("project2").style = "display:block";
      turn++;
    }
  }
