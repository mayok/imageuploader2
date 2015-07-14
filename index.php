<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title></title>
  <link rel="stylesheet" href="css/font-awesome.min.css">
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/common.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div class="header">
    <div class="container">
      <h1>
        <a class="logo" href="#">logo</a>
      </h1>
      <div class="navbar-right">
        <ul>
          <li><a href="./upload.html">Upload</a></li>
        </ul>
      </div>
    </div>
  </div>

  <div class="main">
    <div class="container">
      <ul id="thumbnail" class="clearfix">
      <?php
      $list = glob(dirname(__FILE__)."/images/*.{jpg,jpeg,gif,png}", GLOB_BRACE);
      foreach($list as $key => $value){
        $p = pathinfo($value);
        echo '<li id="'.$p["filename"].'"><img src="'."./images/".$p["basename"].'" width="50" height="50" border=0></li>';
      }
      ?>
      </ul>
      <div class="show-original">
        <img id="show" src="">
        <div class="text">
          <span id="title"></span>
          <span id="caption"></span>
        </div>
      </div>
    </div>
  </div>

  <!-- Javascript
  -->
  <script type="text/javascript" src="./js/show.js"></script>

</body>
</html>