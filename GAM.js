//variables
var home = document.getElementById("home")
 var game = document.getElementById("ruffle")
 
//
function goFullScreen(){
	
	for (const child of game.children) {
	  child.requestFullscreen();
	}
	
}
var hme = document.getElementById("hme")
var tim = 10
//end of variables

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
