//variables
var home = document.getElementById("home")
 var game = document.getElementById("ruffle")
//
var hme = document.getElementById("hme")
var tim = 10
//end of variables
window.onkeydown = function(e){
	
if(e.keyCode === 55){
	show()
}

}
//event listeners
home.addEventListener("mouseover", h1)

//
home.addEventListener("mouseleave", n1)

//

//end of event listeners
//on leave

	function show(){
		game.style = "display: block;"

	}




window.onblur = function(){
game.style = "display: none;"
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
