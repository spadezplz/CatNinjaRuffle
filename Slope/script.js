var game = document.getElementById("gameContainer")


window.onkeydown = function(e){
	
  if(e.keyCode === 55){
    show()
  }
}
  function show(){
		game.style = "display: block;"

	}
  window.onblur = function(){
    game.style = "display: none;"
    }
  