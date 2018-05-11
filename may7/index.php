<?php
    $a = 'Jon';
    $b = 25;
    $d = 'Blue';
?>
<p>Hello <?php echo $a; ?>, Welcome to my site. </p>
<p>My car is <?php echo $d; ?> 
</p>
<?php
$x = 5; 
function test($myVar)
{
    echo "The value of x is: " . $myVar;
}
test($x);

?>