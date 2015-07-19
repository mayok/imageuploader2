function preview(evt) {
  var input  = document.querySelector('input[type="file"]'),
      submit = document.getElementById("submit"),
      btn    = document.getElementById("btn");
  //var next   = document.getElementById("next");
  var files  = evt.target.files;

  if(input.value != "") {
    submit.disabled = false;
    btn.style.display = "none";
    //next.style.display = "inline";

    // show uploaded images using FileReader
    // Loop through the FileList and render image files as thumbnails.
    for(var i = 0, f; f = files[i]; i++) {

      //Only process image files.
      if( !f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();
      reader.onload = (function(theFile) {
        return function(e) {
          var span = document.createElement('span');
          span.innerHTML = ['<img class="thumb" src="',
            e.target.result,
            '" title="',
            escape(theFile.name),
            '"/>'].join('');
          document.getElementById("preview").insertBefore(span, null);
        };
      })(f);

      reader.readAsDataURL(f);
    }

    submit.addEventListener("click", function() {
      // upload only first image
      upload(files[0]);
    }, false);
  } else {
    submit.removeEventListener("click", function() { upload(files[0]); }, false);
    submit.disabled = true;
  }
}

function upload(file) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      // show `successfully uploaded' message with modal
      console.log("successfully file uploaded");
    }
  }
  xmlhttp.open("POST", "upload.php");
  xmlhttp.send("data="+file);
}

function init() {
  var input  = document.querySelector('input[type="file"]');
      btn    = document.getElementById("btn"),
      submit = document.getElementById("submit");

  input.addEventListener("change", preview, false);
  btn.addEventListener("click", function() { input.click(); }, false);
}

document.addEventListener("DOMContentLoaded", init, false);
