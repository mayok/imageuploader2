//var el = document.getElementById("thumbnail");
//el.addEventListener("click", showBigImage, false);
//
//function showBigImage(){
//  console.log(this);
//}
document.getElementById("thumbnail").addEventListener("click", function(e) {
  var t = e.target;

  if(t.nodeName == "IMG"){
    document.getElementById("show").src = t.src;
  }
},false);
