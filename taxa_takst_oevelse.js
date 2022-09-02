var time = 0.1; //variable der viser hvad klokken er 
var km = 2; //variable der viser hvor mange km der skal køres
var total; 
var dagsT = 33;
var aftensT = 47;
var natT = 52;
var tidTotal;

if (time > 6 && time < 18) {
    tidTotal = dagsT * km;
}
else if (time > 18 && time < 0) {
    tidTotal = aftensT * km;
}
else if (time > 0 && time < 6) {
    tidTotal = natT * km; //hvad skal der gøres hvis den præcist er 0?
}



total = tidTotal; 
document.write (total) //herefter skal total udskrives
  