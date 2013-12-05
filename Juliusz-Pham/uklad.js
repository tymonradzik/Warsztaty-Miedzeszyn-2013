//Autor: Juliusz Pham

function scalarv(a,v,ilosc)
{
  var i,t=new Array (ilosc);
  for (i=0; i<ilosc; i++)
    t[i]=v[i]*a;
  return t;
}
function sumv(v1,v2,ilosc)
{
  var i,t=new Array (ilosc);
  for (i=0; i<ilosc; i++)
    t[i]=v1[i]+v2[i];
  return t;
}
function vlength(v,ilosc)
{
  var wyn=0,i;
  for (i=0; i<ilosc; i++)
    wyn+=v[i]*v[i];
  return Math.sqrt(wyn);
}
function versor(v,ilosc)
{
  var i,d=vlength(v,ilosc),t=new Array(ilosc);
  for (i=0; i<ilosc; i++)
    t[i]=v[i]/d;
  return t;
}
function f(m1,m2,p1,p2,g)
{
  var r,v=new Array(2);
  v[0]=p1[0]-p2[0];
  v[1]=p1[1]-p2[1];
  //console.log(v);
  r=vlength(v,2); //console.log(r,'r');
  v=versor(v,2); //console.log(v,'v');
  v=scalarv(g*m1*m2/r/r,v,2); //console.log(v,'v22');
  return v;
}
//jak_się_zaczniesz_kompilować_to_cię_zabiję();
var t,dt=0.1,tmax=400,ms=100,mz=1,g=100,a=new Array(2);
var v=new Array(2),ps=new Array(2),pz=new Array(2);
fill(0,0,255);
for (x=9; x<=13.5; x+=0.2)
{
  stroke(x*16,0,0);
	ps[0]=0; ps[1]=0; pz[0]=0; pz[1]=100; v[1]=0; v[0]=x;
	for (t=0; t<=tmax; t+=dt)
	{
	  ellipse(300,450,10,10);
	  a=scalarv(1/mz,f(ms,mz,ps,pz,g),2);
	  dv=scalarv(dt,a,2);
	  v=sumv(v,dv,2);
	  dp=scalarv(dt,v,2);
	  pz=sumv(dp,pz,2);
	  point(pz[0]+300,pz[1]+450);
	}
}
