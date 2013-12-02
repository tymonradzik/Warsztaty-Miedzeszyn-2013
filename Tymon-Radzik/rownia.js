//Autor : Tymon Radzik
// Ta aplikacja wykonuje symulacje upadku ciała o masie m przyciąganego siłą grawitacji i wyrysowuje wykres tego zjawiska na standardowe wyjście.

function sumaV(a, b)
{
    return [a[0] + b[0], a[1] + b[1]];
}

function sila(m)
{
    return [0,m*9,81];
}

function skalarV(a, b)
{
    return [a[0] * b, a[1] * b];
}

stroke(0,0,0);
fill(0,0,0);

var tMax = 40; //czas symulacji
var dt = 0.01; // kwant czasu
var m = 4; //masa

var start, end;

var v = [1,0]; //początkowa siła
 
var x = [5,0]; //początkowe położenie

line(0,100, 1000, 100);
line(100,0, 100, 1000);

text("x", 0,100);
text("y", 102,22);
text("0",100,103);

stroke(102,153,51);
line(180,194,503,194);
line(180,369,503,369);
line(180,369,180,194);
line(503,369,503,194);

text("Czas symulacji : " +tMax, 200, 240);
text("Skok czasu : " +dt, 200, 270);
text("Masa : " +m, 200, 300);

for(var t = 0; t < tMax; t += dt)
{
    stroke(255,0,0);
fill(255,0,0);
  var a = skalarV(sila(m),1/m);
    var dv = skalarV(a, dt);
    v = sumaV(v, dv);
    var dx = skalarV(v, dt);
  if((x[0] + dx[0]) < 0)
  {
    
  }
    x = sumaV(x, dx); 
    ellipse(x[0]*10+100, x[1]*10+100, 5, 5);
}
