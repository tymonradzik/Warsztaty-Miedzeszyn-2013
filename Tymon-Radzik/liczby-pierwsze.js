//Autor : Tymon Radzik
// Ta aplikacja generuje liczby pierwsze z zakresu od wartości zmiennej l do wartości zmiennej granica i wypisuje je do konsoli JavaScript

var granica = 100; //do jakiej liczby  ?

var liczby = new Array();

var lt, l, ld;
ld=0;
lt=0;

l=1; //od jakiej liczby  

while(l < granica)
{
 for(var i = l; i > 1; i--)
 {
  if(l%i==0)ld++; 
 }
  if(ld==2) { console.log("Znaleziono nową liczbę pierwszą : " + l); liczby[lt] = l; lt++; } 
  ld=0;
  l++;
}
