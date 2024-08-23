<?php
include 'dbcon.php';

if(isset($_POST['category'])) {
    $category = $_POST['category'];

    $sql = "SELECT * FROM products WHERE category='$category'";
    $result = $conn->query($sql);

    $products = array();
    
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $products[] = $row;
        }
    }

    echo json_encode($products);
}
?>
