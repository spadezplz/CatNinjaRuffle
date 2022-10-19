//variables
var home = document.getElementById("home")
var gal = document.getElementById("gal")
var cnt = document.getElementById("cnt")
var ex = document.getElementById("ex")
var dw = document.getElementById("dw")
var navi = document.getElementById("navi")
var title = document.getElementById("title")
var ht = document.getElementById("ht")
//
var hme = document.getElementById("hme")
var gall = document.getElementById("gall")
var cntc = document.getElementById("cntc")
var ext = document.getElementById("ext")
var dwn = document.getElementById("dwn")
//end of variables

//event listeners
home.addEventListener("mouseover", h1)
gal.addEventListener("mouseover", h2)
cnt.addEventListener("mouseover", h3)
ex.addEventListener("mouseover", h4)
dw.addEventListener("mouseover", h5)
//
home.addEventListener("mouseleave", n1)
gal.addEventListener("mouseleave", n2)
cnt.addEventListener("mouseleave", n3)
ex.addEventListener("mouseleave", n4)
dw.addEventListener("mouseleave", n5)
//
home.addEventListener("click", p1)
gal.addEventListener("click", p2)
cnt.addEventListener("click", p3)
ex.addEventListener("click", p4)
dw.addEventListener("click", p5)
//end of event listeners
//on leave
window.onblur = function(){
p1()


}



//end




//highlight
function h1(){
	home.style = " color:#70ff96; border:4px solid #70ff96; cursor:url('IMG/gcur.png'), auto;"
	
}
function h2(){
	gal.style = "color:#70deff; border:4px solid #70deff; cursor:url('IMG/bcur.png'), auto;"
}
function h3(){
	cnt.style = "color:#cf70ff; border:4px solid #cf70ff; cursor:url('IMG/pcur.png'), auto;"
}
function h4(){
	ex.style = "color:#ffc370; border:4px solid #ffc370; cursor:url('IMG/ocur.png'), auto;"
}
function h5(){
	dw.style = "color: #e83a3a; border:4px solid #e83a3a; cursor:url('IMG/rcur.png'), auto;"
}
//normal
function n1(){
	home.style = "color:#ffffff; border:1px solid transparent;"
}
function n2(){
	gal.style = "color:#ffffff; border:1px solid transparent;"
}
function n3(){
	cnt.style = "color:#ffffff; border:1px solid transparent;"
}
function n4(){
	ex.style = "color:#ffffff; border:1px solid transparent;"
}
function n5(){
	dw.style = "color:#ffffff; border:1px solid transparent;"
}
//
function p1(){
	ht.style = "cursor:url('IMG/gcur.png'), auto;"
	title.innerHTML = "Home"
	navi.style = "border:3px solid #70ff96"
	hme.style = "display: block;"
	gall.style = "display: none;"
	cntc.style = "display: none;"
	ext.style = "display: none;"
	dwn.style = "display: none;"
}
function p2(){
	ht.style = "cursor:url('IMG/bcur.png'), auto;"
	title.innerHTML = "Gallery"
	navi.style = "border:3px solid #70deff"
	hme.style = "display: none;"
	gall.style = "display: block;"
	cntc.style = "display: none;"
	ext.style = "display: none;"
	dwn.style = "display: none;"
}
function p3(){
	ht.style = "cursor:url('IMG/pcur.png'), auto;"
	title.innerHTML = "Contact Us"
	navi.style = "border:3px solid #cf70ff"
	hme.style = "display: none;"
	gall.style = "display: none;"
	cntc.style = "display: block;"
	ext.style = "display: none;"
	dwn.style = "display: none;"
}
function p4(){
	ht.style = "cursor:url('IMG/ocur.png'), auto;"
	title.innerHTML = "Online-Arcade"
	navi.style = "border:3px solid #ffc370"
	hme.style = "display: none;"
	gall.style = "display: none;"
	cntc.style = "display: none;"
	ext.style = "display: block;"
	dwn.style = "display: none;"
}
function p5(){
	ht.style = "cursor:url('IMG/rcur.png'), auto;"
	title.innerHTML = "Downloads"
	navi.style = "border:3px solid #e83a3a"
	hme.style = "display: none;"
	gall.style = "display: none;"
	cntc.style = "display: none;"
	ext.style = "display: none;"
	dwn.style = "display: block;"
}
//end of style script
