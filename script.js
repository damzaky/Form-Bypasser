var t = document.querySelectorAll("input[type=text],textarea");
var te = document.querySelectorAll("input[type=email]");
var tp = document.querySelectorAll("input[type=password]");

for (var i=0; i<t.length; i++)
t[i].value = "abc";

for (var i=0; i<te.length; i++)
te[i].value = "abc";

for (var i=0; i<tp.length; i++)
tp[i].value = "abc";

var r = document.querySelectorAll('input[type=radio]');
for (var i=0; i<r.length; i++)
r[i].checked = true;

var c = document.querySelectorAll('input[type=checkbox]');
for (var i=0; i<c.length; i++)
c[i].checked = true;


// for google form:
var rg = document.querySelectorAll('*[class*="radio"]');
for(i=0;i<rg.length;i++)
rg[i].click();
var cg = document.querySelectorAll('*[class*="checkbox"]');
for(i=0;i<cg.length;i++)
cg[i].click();
