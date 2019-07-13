function lengthConverter(unitType,valNum) {
  var valNum = parseFloat(valNum);
  var inputmm = document.getElementById("inputMm");
  var inputcm = document.getElementById("inputCm");
  var inputmetre = document.getElementById("inputMetre");
  var inputkm = document.getElementById("inputKm");
  var inputinch = document.getElementById("inputInch");
  var inputfeet = document.getElementById("inputFeet");


  if (unitType == "inputMm"){
    inputcm.value = (valNum / 10).toFixed(4);
    inputmetre.value = (valNum / 1000).toFixed(4);
    inputkm.value = (valNum / 1000000).toFixed(4);
    inputinch.value = (valNum * 0.0393701).toFixed(4);
    inputfeet.value = (valNum * 0.00328084).toFixed(4);
  }

  if (unitType == "inputCm"){
    inputmm.value = (valNum * 10).toFixed(4);
    inputmetre.value = (valNum / 100).toFixed(4);
    inputkm.value = (valNum / 1000).toFixed(4);
    inputinch.value = (valNum * 0.393701).toFixed(4);
    inputfeet.value = (valNum * 0.032808).toFixed(4);
  }

  if (unitType == "inputMetre"){
    inputmm.value = (valNum * 1000).toFixed(4);
    inputcm.value = (valNum * 100).toFixed(4);
    inputkm.value = (valNum / 1000).toFixed(4);
    inputinch.value = (valNum * 39.3701).toFixed(4);
    inputfeet.value = (valNum * 3.28084).toFixed(4);
  }

  if (unitType == "inputKm"){
    inputmm.value = (valNum * 1000000).toFixed(4);
    inputcm.value = (valNum * 100000).toFixed(4);
    inputmetre.value = (valNum * 1000).toFixed(4);
    inputinch.value = (valNum * 39370.1).toFixed(4);
    inputfeet.value = (valNum * 3280.841666667).toFixed(4);
  }
 
  if (unitType == "inputInch"){
    inputmm.value = (valNum * 25.4).toFixed(4);
    inputcm.value = (valNum * 2.54).toFixed(4);
    inputmetre.value = (valNum * 0.0254).toFixed(4);
    inputkm.value = (valNum / 39370.079).toFixed(4);
    inputfeet.value = (valNum / 12).toFixed(4);
  }

  if (unitType == "inputFeet"){
    inputmm.value = (valNum * 304.8).toFixed(4);
    inputcm.value = (valNum * 30.48).toFixed(4);
    inputmetre.value = (valNum / 3.2808).toFixed(4);
    inputkm.value = (valNum / 3280.8).toFixed(4);
    inputinch.value = (valNum * 12).toFixed(4);
  }
}

function calculateDistance(){

  var speed =parseInt (document.getElementById("inputKmHr").value);
  
  var time =parseInt (document.getElementById("inputHr").value);
  
  const distance= speed*time+ " km";

  document.getElementById("cardContents").innerHTML = distance;
}