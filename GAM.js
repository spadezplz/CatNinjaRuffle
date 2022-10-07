//variables
var home = document.getElementById("home")

//
var hme = document.getElementById("hme")

//end of variables

//event listeners
home.addEventListener("mouseover", h1)

//
home.addEventListener("mouseleave", n1)

//

//end of event listeners
//on leave
window.onblur = function(){
p1()


}



//end




//highlight
function h1(){
	home.style = " color:#70ff96; border:4px solid #70ff96;"
}

//normal
function n1(){
	home.style = "color:#ffffff; border:1px solid transparent;"
}

//


//end of style script
