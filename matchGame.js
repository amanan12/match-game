var val;

list = [];

click1("one", "limegreen", 1);
click1("two", "skyblue", 2);
click1("three", "brown", 3);
click1("four", "pink", 4);
click1("five", "purple", 5);
click1("six", "green", 6);
click1("seven", "red", 7);
click1("eight", "orange", 8);

click2("oneM", "limegreen", 1);
click2("twoM", "skyblue", 2);
click2("threeM", "brown", 3);
click2("fourM", "pink", 4);
click2("fiveM", "purple", 5);
click2("sixM", "green", 6);
click2("sevenM", "red", 7);
click2("eightM", "orange", 8);

function check(demo){
  val = document.getElementById(demo).getAttribute("value");
  list.push(val);
  console.log(val);
  checker();
  console.log(list);
}

function checker(){
  var a = list.length;
  console.log("Length: " + a);

  if(a == 2){
    if( parseInt(list[0]) == parseInt(list[1]) ){
      console.log(true);
      list = [];
    } else {
      //console.log("First " + sw(list[0]) + sw(list[1]));
      setTimeout(something, 100);
    }
  }

}

function something(){
  $("#" + sw(list[0])).css({"background-color": "#204056", "color": "#204056"});
  $("#" + sw(list[1])).css({"background-color": "#204056", "color": "#204056"});
  list = [];
}

function sw(b){

  var a = parseInt(b);

  if(a == 1){
    return "one";
  } else if(a == 2){
    return "two";
  } else if(a == 3){
    return "three";
  } else if(a == 4){
    return "four";
  } else if(a == 5){
    return "five";
  } else if(a == 6){
    return "six";
  } else if(a == 7){
    return "seven";
  } else if(a == 8){
    return "eight";
  }

}

function click1(id, color, value){ 
  $("#" + id).click(function(){
    $("#" + id).css("background-color", color);
    $("#" + id).css("color", "white");
    $("#" + id).attr("value", value);
    check(id);
  });
}

function click2(id, color, value){ 
  $("#" + id).click(function(){
    $("#" + id).css("background-color", color);
    $("#" + id).css("color", "white");
    $("#" + id).attr("value", value);
    check(id);
  });
}





