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
  r=vlength(v,2);
  if (r<0.1) r=0.1;
  v=versor(v,2);
  v=scalarv(-g*m1*m2/r/r,v,2);
  return v;
}
//jak_się_zaczniesz_kompilować_to_cię_zabiję();	
var t,dt=0.01,tmax=1,g=20,a=new Array;
var v=new Array,p=new Array,m=new Array,i,j,n=9; 
var green=new Array,red=new Array,blue=new Array;
var dv=new Array,dp=new Array;
console.log('hot');
for (t=0; t<n; t++) { a[t]=new Array(2); v[t]=new Array(2);
	p[t]=new Array(2); dv[t]=new Array(2); dp[t]=new Array; }
p[0][0]=0; p[0][1]=0; v[0][0]=0; v[0][1]=0; red[0]=255;
p[1][0]=3.871; p[2][0]=7.233; p[3][0]=10; p[4][0]=15.237;
p[5][0]=52.034; p[6][0]=95.371; p[7][0]=191.913;
p[8][0]=300.690;
m[0]=332950; m[1]=0.055; m[2]=0.815;
m[3]=1; m[4]=0.107; m[5]=317.8;
m[6]=95.16; m[7]=14.536; m[8]=17.147;
v[1][1]=478.70; v[2][1]=350.20; v[3][1]=297.83;
v[4][1]=241.30; v[5][1]=130.70; v[6][1]=96.38;
v[7][1]=67.95; v[8][1]=54.78;
console.log('kur');
for (t=0; t<=tmax; t+=dt)
{
  console.log('waz');
  for (i=0; i<n; i++) 
  {
    a[i][0]=0; a[i][1]=0;
    for (j=0; j<n; j++)
    {
      if (i!=j)
        a[i]=sumv(a[i],scalarv(1/m[i],f(m[i],m[j],p[i],p[j],g),2),2);
    }
    //console.log(a[
  }
  console.log('klo');
  for (i=0; i<n; i++)
  {
    //console.log(a[i],v[i],dv[i],p[i],dp[i]);
    dv[i]=scalarv(dt,a[i],2);
    v[i]=sumv(v[i],dv[i],2);
	dp[i]=scalarv(dt,v[i],2);
	p[i]=sumv(dp[i],p[i],2);
	//if (k%10==0)
    console.log('bar');
    
      stroke(red[i],green[i],blue[i]);
      if (i!=0) point(p[i][0]+150,p[i][1]+250);
      else ellipse(p[i][0]+150,p[i][1]+250,5,5);
    
  }
}
