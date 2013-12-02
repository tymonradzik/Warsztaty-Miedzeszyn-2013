// Autor : Tymon Radzik
// Ta aplikacja wykonuje symulacje lotu ciała, na które działają dwie siły i wyrysowuje wykres na standardowe wyjście.

// Środowisko : http://szkolakodzenia.ee/

function sumaV(a, b)
{
    return [a[0] + b[0], a[1] + b[1]];
}

function sila(k, x, b)
{
    return [-k*x-v[0]*b,0];
}

function skalarV(a, b)
{
    return [a[0] * b, a[1] * b];
}

stroke(0,0,0);
fill(0,0,0);

var tMax = 40; //czas trwania symulacji
var dt = 0.1; // kwant czasu
var m = 4; //masa ciała
var k = 5; //siła
var b = 0.9; //siła oporu

var start, end;

var v = [0,1];

var x = [5,0];

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
text("Sprężyna : " +k, 200, 330);
text("Tłumienie : " +b, 200, 360);

for(var t = 0; t < tMax; t += dt)
{
    stroke(255,0,0);
fill(255,0,0);
  var a = skalarV(sila(k,x[0], b),1/m);
    var dv = skalarV(a, dt);
    v = sumaV(v, dv);
    var dx = skalarV(v, dt);
    x = sumaV(x, dx); 
    console.log(x);
    ellipse(x[0]*10+100, x[1]*10+100, 5, 5);
    point(x[0]*10+100, x[1]*10+100);
}
