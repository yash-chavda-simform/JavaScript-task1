var values = "";
  var value_display="";
  function sqrt2() {
    values += "Math.sqrt(";
    value_display+="sqrt(";
    print()
  }
  function modulo(){
    values+="%"
    value_display+="%"
    print()
  }
  function point() {
    values += ".";
    value_display += ".";
    print()
  }
  function zero() {
    values += "0";
    value_display += "0";
    print()
  }
  function one() {
    values += "1";
    value_display += "1";
    print()
  }
  function two() {
    values += "2";
    value_display += "2";
    print()
  }
  function three() {
    values += "3"
    value_display += "3";
    print()
  }
  function four() {
    values += "4";
    value_display += "4";
    print()
  }
  function five() {
    values += "5";
    value_display += "5";
    print()
  }
  function six() {
    values += "6";
    value_display += "6";
    print()
  }
  function seven() {
    values += "7";
    value_display += "7";
    print()
  }
  function eight() {
    values += "8";
    value_display += "8";
    print()
  }
  function nine() {
    values += "9";
    value_display += "9";
    print()
  }
  function bracket1() {
    values += "(";
    value_display += "(";
    print()
  }
  function bracket2() {
    values += ")";
    value_display += ")";
    print()
  }
  function log() {
    values += "Math.log10(";
    value_display += "log(";
    print()
  }
  function ln() {
    values += "Math.log(";
    value_display += "ln(";
    print()
  }
  function tenr() {
    values += "10**";
    value_display += "10^";
    print()
  }
  function raisr() {
    values += "**";
    value_display += "^";
    print()
  }
  function clearr() {
    values = ""
    value_display = "";
    document.getElementById("display").innerHTML = "0";
  }
  function ans() {
    if (values.length == 0) {
      values = "0";
      value_display = "0";
    }
    try {
      document.getElementById("display").innerHTML = eval(values);
    } catch {
      document.getElementById("display").innerHTML = "Syntex error";
    }
    values = ""
    value_display = "";
  }
  function add() {
    values += "+"
    value_display += "+";
    print()
  }
  function sub() {
    values += "-"
    value_display += "-";
    print()
  }
  function div() {
    values += "/"
    value_display += "<i class='fa-solid fa-divide'></i>";
    print()
  }
  function mul() {
    values += "*"
    value_display += "<i class='fa-solid fa-xmark'></i>";
    print()
  }
  function remove() {
    values = values.substr(0, values.length - 1);
    value_display = value_display.substr(0, value_display.length - 1);
    print()
  }
  function squares() {
    let splitUp = values.match(/[^\d]+|[\d.]+/g);
    let splitUp2 = value_display.match(/[^\d]+|[\d.]+/g);
    let last = splitUp[splitUp.length - 1];
    if(Number(last)){
      let sq = last * last;
      splitUp.pop();
      splitUp2.pop();
      values = splitUp.join("");
      value_display = splitUp2.join("");
      values += sq;
      value_display += sq;

    }else{
      values="Syntex Error"
      value_display="Syntex Error"
    }  
    print()
  }
  function fact() {
    let splitUp = values.match(/[^\d]+|[\d.]+/g);
    let splitUp2 = value_display.match(/[^\d]+|[\d.]+/g);
    let last = splitUp[splitUp.length - 1];
    if(Number(last)){
      let factans = factorialize(last);
      splitUp.pop();
      splitUp2.pop();
      values = splitUp.join("");
      value_display = splitUp2.join("");
      values += factans;
      value_display += factans;
    }else{
      values="Syntex Error"
      value_display="Syntex Error"
    }
    print()
  }
  function divx() {
    let splitUp = values.match(/[^\d]+|[\d.]+/g);
    let splitUp2 = value_display.match(/[^\d]+|[\d.]+/g);
    let last = splitUp[splitUp.length - 1];
    if(Number(last)){
      let sq = 1 / last;
      splitUp.pop();
      splitUp2.pop();
      values = splitUp.join("");
      value_display = splitUp2.join("");
      values += sq;
      value_display += sq;
    }else{
      values="Syntex Error"
      value_display="Syntex Error"
    }
    print()
  }
  function pi() {
    if(values){
      let splitUp = values.match(/[^\d]+|[\d.]+/g);
      let splitUp2 = value_display.match(/[^\d]+|[\d.]+/g);
      let last = splitUp[splitUp.length - 1];
      if (Number(last)) {
        splitUp.pop();
        splitUp2.pop();
        values = splitUp.join("");
        value_display = splitUp2.join("");
        values += "3.14";
        value_display += "3.14";
      } else {
        values += "3.14";
        value_display += "3.14";
      }
    }else{
      values += "3.14";
      value_display += "3.14";
    }
    print()
  }
  function factorialize(num) {
    if (num < 0)
      return -1;
    else if (num == 0)
      return 1;
    else {
      return (num * factorialize(num - 1));
    }
  }
  //common method
  function print() {
    document.getElementById("display").innerHTML = value_display;
  }
  function trigonometryy(){
    var trigo=document.getElementById("trigonometry");  
    var trigo2=trigo.options[trigonometry.selectedIndex].text;
    let select1="sin<sup>-1</sup>";
    if(trigo2=="sin"){
      values+="Math.sin("; 
      value_display+="sin("     
    }else if(trigo2=="cos"){
      values+="Math.cos(";
      value_display+="cos("
    }else if(trigo2=="tan"){
      values+="Math.tan(";
      value_display+="tan("
    }else if(trigo2=="sinInverse"){
      values+="Math.asin(";
      value_display+="sinIn("
    }else if(trigo2=="cosInverse"){
      values+="Math.acos(";
      value_display+="cosIn("
    }else if(trigo2=="tanInverse"){
      values+="Math.atan(";
      value_display+="tanIn("
    }
    print()
  }
  