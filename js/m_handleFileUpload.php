<?php // You need to add server side validation and better error handling here
 
$data = array();
print_r($_REQUEST);
print_r($_FILES);
if(isset($_REQUEST['files'])){
	$error = false;
	$files = array();
 	echo "Testing";
	$uploaddir = '';
	foreach($_FILES as $file){
		if(move_uploaded_file($file['tmp_name'], $uploaddir .basename($file['name']))){
			$files[] = $uploaddir .$file['name'];
		}
		else{
			$error = true;
		}
	}
	$data = ($error) ? array('error' => 'There was an error uploading your files') : array('files' => $files);
}else{
	$data = array('success' => 'Form was submitted', 'formData' => $_POST);
}
 
echo json_encode($data);
 
?>
