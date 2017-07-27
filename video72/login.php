<?php 
	$contrasena="123456";
	$usuario="dairon";

	$elusuario=isset($_GET["usuario"]) ? $_GET["usuario"] : $_POST["usuario"];
	$lacontra=isset($_GET["contra"]) ? $_GET["contra"] : $_POST["contra"];
	if($elusuario==$usuario && $lacontra==$contrasena){
		echo "autorizado";
	}else{
		echo "Fallo al ingresar ";
	}
?>