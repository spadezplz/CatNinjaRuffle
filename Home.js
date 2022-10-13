var title=document.getElementById("title")
var home=document.getElementById("home")
var gal=document.getElementById("gal")
var cnt=document.getElementById("cnt")
var ex=document.getElementById("ex")
var navi=document.getElementById("navi")
var hme=document.getElementById("hme")
var gall=document.getElementById("gall")
var cntc=document.getElementById("cntc")
var ext=document.getElementById("ext")

home.addEventListener("mouseover",h1())
gal.addEventListener("mouseover",h2())
cnt.addEventListener("mouseover",h3)
ex.addEventListener("mouseover",h4)

home.addEventListener("mouseleave",n1)
gal.addEventListener("mouseleave",n2)
cnt.addEventListener("mouseleave",n3)
ex.addEventListener("mouseleave",n4)

home.addEventListener("click",p1())
gal.addEventListener("click",p2())
cnt.addEventListener("click",p3)
ex.addEventListener("click",p4)

window.onblur=function(){p1()}


function h1(){home.style=" color:#70ff96; border:4px solid #70ff96;"}
function h2(){gal.style="color:#70deff; border:4px solid #70deff;"}
function h3(){cnt.style="color:#cf70ff; border:4px solid #cf70ff;"}
function h4(){ex.style="color:#ffc370; border:4px solid #ffc370;"}
function n1(){home.style="color:#ffffff; border:1px solid transparent;"}
function n2(){gal.style="color:#ffffff; border:1px solid transparent;"}
function n3(){cnt.style="color:#ffffff; border:1px solid transparent;"}
function n4(){ex.style="color:#ffffff; border:1px solid transparent;"}
function p1(){
 title.innerHTML="Home"
 navi.style="border:3px solid #70ff96" 
 hme.style="display: block;"
 gall.style="display: none;"
 cntc.style="display: none;"
 ext.style="display: none;"
}
function p2(){
title.innerHTML="Gallery"
navi.style="border:3px solid #70deff"
hme.style="display: none;"
gall.style="display: block;"
cntc.style="display: none;"
ext.style="display: none;"
}
function p3(){
title.innerHTML="Contact Us"
navi.style="border:3px solid #cf70ff"
hme.style="display: none;"
gall.style="display: none;"
cntc.style="display: block;"
ext.style="display: none;"
}
function p4(){
title.innerHTML="Extraz"
navi.style="border:3px solid #ffc370"
hme.style="display: none;"
gall.style="display: none;"
cntc.style="display: none;"
ext.style="display: block;"
}