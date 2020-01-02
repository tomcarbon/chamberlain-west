<?php
$fname = "counterfiles/" . $_POST['fname'];

/* validation: */
/* filename must be in the format 'cxx' where  0 < xx < 99 */
if (file_exists($fname)) {
	$myfile = fopen($fname, "r") or die("Unable to open file!");
	$output = fread($myfile,4);
	$output = (string) $output;
	fclose($myfile);
	$output = (string)($output + 1);
	$myfile = fopen($fname, "w") or die("Unable to open file!");
	fwrite ($myfile, $output);
	fclose($myfile);
	echo $output;
} else {   // the file does not exist so make a new one.
	$myfile = fopen($fname, "w") or die("Unable to open file!");
	$output = "1";
	fwrite ($myfile, $output);
	fclose($myfile);
	echo $output;
}

return;
?>

