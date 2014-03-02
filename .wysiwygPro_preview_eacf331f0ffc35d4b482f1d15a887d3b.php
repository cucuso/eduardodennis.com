<?php
if ($_GET['randomId'] != "zG7iOyku207b8aexbCPzNeDajAb7tDYogQahkKqHBrmx4TUFeSndBqV6fkkln3Nr") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
