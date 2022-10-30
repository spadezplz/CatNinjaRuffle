<!DOCTYPE html>
<html id="ht" lang="en" style="cursor:url('IMG/gcur.png'), auto;">
<head>
   <meta name="google-site-verification" content="NZzmDOus_qQhNxYB-pN6lnkCLJh38m_Ri3W-67tycPE" />
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2111670364664156"
     crossorigin="anonymous"></script>
<link rel="icon" type="image/png" href="favicon-32x32.png">
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title id="title">Home</title>
</head>
<body>
   


<link rel="stylesheet" href="Home.css" >

  
<center>
</center>

<link rel="stylesheet" href="Home.css">
<nav id="navi" style="border:3px solid #ffc370">
  
   <center>
  <a href="Home.html"><button class="ext" style="min-width: 100%;" id="home">Home</button></a></center>
</nav>


   
  
  
   <div id="dwn" style="display: block;">
        <center>
         &nbsp;
      <br>
      <br>
      
         <p style="border:3px solid #e83a3a">
            
            
     Game links will be here soon...

    <form name="form" method="post" action="upload.php" enctype="multipart/form-data" >
      <input type="file" name="my_file" /><br /><br />
      <input type="submit" name="submit" value="Upload"/>
      </form>
         </p>
         
      </center>
       </div>
    
      
 

   
     
   
   <script src="Home.js"></script>
</body>
</html>
<?php
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
  $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
  if($check !== false) {
    echo "File is an image - " . $check["mime"] . ".";
    $uploadOk = 1;
  } else {
    echo "File is not an image.";
    $uploadOk = 0;
  }
}
?>