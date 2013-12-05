//Autor : Jakub Adamski
// Ta aplikacja generuje symulację ruchu wahadła chaotycznego

function scalarV(v, dlugosc, liczba) {
  var wynik = new Array(dlugosc);
  var i;
  for (i = 0; i < dlugosc; i++) {
    wynik[i] = v[i] * liczba;
  }
  return wynik;
}

function sumV(v1, v2, dlugosc) {
  var wynik = new Array(dlugosc);
  var i;
  for (i = 0; i < dlugosc; i++) {
    wynik[i] = v1[i] + v2[i];
  }
  return wynik;
  
}
function reset()
{
 m =1;
 g = 9.98;
 d =0;
 t=30;
 R=120;
 A=300;
  k=1;
v=3;
  b=0;
 a=0;
  t=0;
  skalaWykresu=0.3;
  background(255,255,255)
}
reset();
px =280;
py=160;
draw=function ()
{
  t++;
  if(isKeyPressed(UP) ){
    reset();}
 
  a=((-g)/R)*sin(d)+((-b)*v+A*cos(k*t))/(m*R*R);
v=v+a;
d=d+v;
  fill(255,255,255);
 
  rect(12,8, 530, 301)
  x=sin(d)*R;
  y=cos(d)*R;
  line(px,py, px+x,py+y)
  fill(0,0,0)
  ellipse(px+x,py+y,20,20);
  vx = -y; vy=x;
  vx=-vx*v;
  vy=-vy*v;
  ellipse (20+t/2,500+d*skalaWykresu,10,10) 
  line (10,683,10,344 )
  line (10,500, 600, 500)
  textSize(20)
  text("kąt", 20,350)
  text("czas", 530,490)
  text("90", 20,500+90*skalaWykresu)
  text("-90", 20,500-90*skalaWykresu)
  line (px+x,py+y, px+x+vx/20, py+y+vy/20 )
}
