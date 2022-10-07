//variables
var home = document.getElementById("home")
var gal = document.getElementById("gal")
var cnt = document.getElementById("cnt")
var ex = document.getElementById("ex")
//end of variables

//event listeners
home.addEventListener("mouseover", h1)
gal.addEventListener("mouseover", h2)
cnt.addEventListener("mouseover", h3)
ex.addEventListener("mouseover", h4)
//
home.addEventListener("mouseleave", n1)
gal.addEventListener("mouseleave", n2)
cnt.addEventListener("mouseleave", n3)
ex.addEventListener("mouseleave", n4)
//end of event listeners
//highlight
function h1(){
	home.style = " color:#70ff96; border:4px solid #70ff96;"
}
function h2(){
	gal.style = "color:#70deff; border:4px solid #70deff;"
}
function h3(){
	cnt.style = "color:#cf70ff; border:4px solid #cf70ff;"
}
function h4(){
	ex.style = "color:#ffc370; border:4px solid #ffc370;"
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
//end of style script