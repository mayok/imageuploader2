function handleDrop(evt) {
}
function handleDragOver(evt) {
}
function fileChange(evt) {
  // enable submit button
/*
This is writen by jquery
$(function(){
  $('input:submit').attr('disabled', true);
  $('input:file').change(
      function(){
        if($(this).val()) {
          $('input:submit').removeAttr('disabled');
          var reader = new FileReader();
          reader.onload = function(){
            var img_src = $('<img>').attr('src', reader.result);
            $('#dummy-btn').empty().prepend(img_src);
          }
          reader.readAsDataURL($(this).prop('files')[0]);
        }
        else {
          $('input:submit').attr('disabled', true);
        }
      });
});
*/
  console.log(evt.target.files);
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

if (window.File && window.FileReader && window.FileList && window.Blob && window.XMLHttpRequest) {
  // All the File APIs are supported.
  var dropZone = document.getElementById("drop-zone");
  dropZone.addEventListener("dragover", handleDragOver, false);
  dropZone.addEventListener("drop", handleDrop, false);

} else {
  alert('ドラッグアンドドロップ機能が使えません');
}

document.getElementById("demo-input").addEventListener("change", fileChange, false);
document.getElementById("input-btn").addEventListener("click", function() {
  document.getElementById("demo-input").click();
}, false);
document.getElementById("upload-btn").addEventListener("click", function() {
  uploadFile("file");
}, false);
