function fileChange(evt) {
  var input  = document.getElementById("demo-input");
  var submit = document.getElementById("upload-btn");
  var btn    = document.getElementById("btn");
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
  } else {
    submit.disabled = true;
  }
}

function uploadFile(evt) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      // show `successfully uploaded' message with modal
    }
  }
  xmlhttp.open("POST", "upload.php");
  xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xmlhttp.send('data=' + evt.data);
}

function checkFileAPI() {
  if (window.File && window.FileReader && window.FileList && window.Blob && window.XMLHttpRequest) {
    // All the File APIs are supported.
  } else {
    alert('ドラッグアンドドロップ機能が使えません');
  }
}

function init() {
  var input  = document.getElementById("demo-input"),
      btn    = document.getElementById("btn"),
      submit = document.getElementById("upload-btn");

  submit.disabled = true;
  input.addEventListener("change", fileChange, false);
  btn.addEventListener("click", function() { input.click(); }, false);
  submit.addEventListener("click", function() { uploadFile("file"); }, false);

  checkFileAPI();
}

document.addEventListener("DOMContentLoaded", init, false);
