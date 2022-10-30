//variables
var home = document.getElementById("home")
var gal = document.getElementById("gal")
var cnt = document.getElementById("cnt")
var ex = document.getElementById("ex")
var dw = document.getElementById("dw")
var nav = document.getElementById("navi")
var tab = 1

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

window.onscroll = function() {scroll()};

var sticky = nav.offsetTop;
//end of event listeners
//on leave
function scroll(){
	if (window.pageYOffset >= sticky) {
		nav.classList.add("sticky")
	  } else {
		nav.classList.remove("sticky");
	  }

}



//end




//highlight
function h1(){
	home.style = " color:#70ff96; border:4px solid #70ff96; cursor:url('IMG/gcur.png'), auto;"
	nav.style = "border: 3px solid #70ff96;"
}
function h2(){
	gal.style = "color:#70deff; border:4px solid #70deff; cursor:url('IMG/bcur.png'), auto;"
	nav.style = "border:  3px solid #70deff;"
}
function h3(){
	cnt.style = "color:#cf70ff; border:4px solid #cf70ff; cursor:url('IMG/pcur.png'), auto;"
	nav.style = "border:  3px solid #cf70ff;"
}
function h4(){
	ex.style = "color:#ffc370; border:4px solid #ffc370; cursor:url('IMG/ocur.png'), auto;"
	nav.style = "border:  3px solid #ffc370;"
}
function h5(){
	dw.style = "color: #e83a3a; border:4px solid #e83a3a; cursor:url('IMG/rcur.png'), auto;"
	nav.style = "border:  3px solid #e83a3a;"
}
//normal
function n1(){
	home.style = "color:#ffffff; border:1px solid transparent;"
	if(tab === 1){
		nav.style = "border: 3px solid #70ff96;"
	}
}
function n2(){
	gal.style = "color:#ffffff; border:1px solid transparent;"
	if(tab === 2){
		nav.style = "border:  3px solid #70deff;"
	}
}
function n3(){
	cnt.style = "color:#ffffff; border:1px solid transparent;"
	if(tab === 3){
		nav.style = "border:  3px solid #cf70ff;"
	}
}
function n4(){
	ex.style = "color:#ffffff; border:1px solid transparent;"
	if(tab === 4){
		nav.style = "border:  3px solid #ffc370;"
	}
}
function n5(){
	dw.style = "color:#ffffff; border:1px solid transparent;"
	if(tab === 4){
		nav.style = "border:  3px solid #e83a3a;"
	}
}
//
function p1(){
	ht.style = "cursor:url('IMG/gcur.png'), auto;"
	title.innerHTML = "Home"
tab = 1
	hme.style = "display: block;"
	gall.style = "display: none;"
	cntc.style = "display: none;"
	ext.style = "display: none;"
	dwn.style = "display: none;"
}
function p2(){
	ht.style = "cursor:url('IMG/bcur.png'), auto;"
	title.innerHTML = "Gallery"
	tab = 2
	hme.style = "display: none;"
	gall.style = "display: block;"
	cntc.style = "display: none;"
	ext.style = "display: none;"
	dwn.style = "display: none;"
}
function p3(){
	ht.style = "cursor:url('IMG/pcur.png'), auto;"
	title.innerHTML = "Contact Us"
	tab = 3
	hme.style = "display: none;"
	gall.style = "display: none;"
	cntc.style = "display: block;"
	ext.style = "display: none;"
	dwn.style = "display: none;"
}
function p4(){
	ht.style = "cursor:url('IMG/ocur.png'), auto;"
	title.innerHTML = "Online-Arcade"
	tab = 4
	hme.style = "display: none;"
	gall.style = "display: none;"
	cntc.style = "display: none;"
	ext.style = "display: block;"
	dwn.style = "display: none;"
}
function p5(){
	ht.style = "cursor:url('IMG/rcur.png'), auto;"
	title.innerHTML = "Downloads"
	tab = 5
	hme.style = "display: none;"
	gall.style = "display: none;"
	cntc.style = "display: none;"
	ext.style = "display: none;"
	dwn.style = "display: block;"
}
//end of style script
