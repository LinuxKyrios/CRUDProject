<?php include('serwer.php'); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="jquery-3.5.1.min.js"></script>
    <script src="script.js"></script>
    <title>Basic commentary system with jQuery and MySQL</title>
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="wrapper">
    <h1 class="title">The CRUD system with Ajax, jQuery and MySQL database</h1>
  	    <?php echo $comments; ?>
  	    <form class="comment_form">
            <div>
                <label for="name">Username:</label>
      	        <input type="text" name="name" id="name">
            </div>
            <div>
      	        <label for="comment">Comment:</label>
      	        <textarea name="comment" id="comment" cols="30" rows="5"></textarea>
            </div>
            <button type="button" id="submit_btn">PUBLISH</button>
            <button type="button" id="update_btn" style="display: none;">UPDATE</button>
  	    </form>
    </div>
</body>
</html>