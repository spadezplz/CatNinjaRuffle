window.onload = function(){

  var iframe = document.getElementById("myFrame");

  var elmnt2 = iframe.contentWindow.document.getElementsByTagName("H1")[0];
  const boxes = document.querySelectorAll('.content');

  boxes.forEach(box => {
    box.remove();
  });
  elmnt2.style.display = "none";


}