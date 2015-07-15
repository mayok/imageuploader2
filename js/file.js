;(function() {

  function handleDrop(evt) {
  }
  function handleDragOver(evt) {
  }
  function fileChange(evt) {
    var input  = document.getElementById("demo-input");
    var submit = document.getElementById("upload-btn");

    if(input.value != "") {
      submit.disabled = false;

      // show uploaded images using FileReader
    } else {
      submit.disabled = true;
    }
  }

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
      var dropZone = document.getElementById("drop-zone");
      dropZone.addEventListener("dragover", handleDragOver, false);
      dropZone.addEventListener("drop", handleDrop, false);
    
    } else {
      alert('ドラッグアンドドロップ機能が使えません');
    }
  }

  function init() {
    var input  = document.getElementById("demo-input"),
        ibtn   = document.getElementById("input-btn"),
        submit = document.getElementById("upload-btn");

    submit.disabled = true;
    input.addEventListener("change", fileChange, false);
    ibtn.addEventListener("click", function() {
      input.click();
    }, false);
    submit.addEventListener("click", function() {
      uploadFile("file");
    }, false);

    checkFileAPI();
  }

  init();
})();
