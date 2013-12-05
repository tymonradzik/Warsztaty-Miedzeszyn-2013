//Autor:Juliusz Pham

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
function fx(k,x)
{
  return -k*x;
}
function fy()
{
  return 0;
}
function sgn(a)
{
  if (a<0) return -1;
  if (a==0) return 0;
  if (a>0) return 1;
}
var t,m=1.15,k=1,tmax=35,dt=0.01,p=new Array(2);
var v=new Array(2),a=new Array(2),c=true;
p[0]=5; p[1]=0;
v[0]=0; v[1]=1;
for (t=0; t<=tmax; t+=dt)
{
  a[0]=fx(k,p[0])/m;
  a[1]=fy()/m;
  var dv=new Array(2),dp=new Array(2);
  dv=scalarv(dt,a,2);
  v=sumv(v,dv,2);
  dp=scalarv(dt,v,2);
  p=sumv(p,dp,2);
  var t0;
  if (sgn(p[0])!=sgn(p[0]+dp[0]) && sgn(v[0])==1)
  {
    if (!c) console.log("k/m =",k/m,"okres =",t-t0);
    t0=t;
    c=false;
  }
  point(p[0]*10+300,p[1]*10+10);
  //console.log(p[0],p[1]);
}
