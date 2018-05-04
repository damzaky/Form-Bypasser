var tx = "sesuatu";

var t = document.querySelectorAll("input[type=text],textarea");
var te = document.querySelectorAll("input[type=email]");
var tp = document.querySelectorAll("input[type=password]");
var tn = document.querySelectorAll("input[type=number]");
var r1,r2,r3;
for (var i=0; i<t.length; i++)
t[i].value = tx;

for (var i=0; i<te.length; i++)
te[i].value = tx+"@a.com";

for (var i=0; i<tp.length; i++)
tp[i].value = tx;

for (var i=0; i<tn.length; i++)
tn[i].value = Math.floor((Math.random() * 100) + 1);

var r = document.querySelectorAll('input[type=radio]');
for (var i=0; i<r.length; i++)
r[i].checked = true;
for (var i=0; i<r.length; i++){
r1=Math.floor((Math.random() * r.length)); //randomizer
r[r1].checked = true;
}

var c = document.querySelectorAll('input[type=checkbox]');
for (var i=0; i<c.length; i++)
c[i].checked = true;

var s=document.getElementsByTagName("select");
for (var i=0; i<s.length; i++){
r3=Math.floor((Math.random() * s[i].options.length)); //randomizer
s[i].selectedIndex = r3;
}

// for google form:
var rg = document.querySelectorAll('*[class*="radio"]');
for(i=0;i<rg.length;i++)
rg[i].click();
for (var i=0; i<rg.length; i++){
r2=Math.floor((Math.random() * rg.length)); //randomizer
r[r2].checked = true;
}
var cg = document.querySelectorAll('*[class*="checkbox"]');
for(i=0;i<cg.length;i++)
cg[i].click();
