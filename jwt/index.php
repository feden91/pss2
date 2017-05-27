<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
require 'vendor/autoload.php';
require_once 'tokenManager.php';
require_once 'genericDAO.php';
require_once 'Encuestas.php';
$app = new \Slim\App;
$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});
$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
});

$app->post('/token',function(Request $request, Response $response){

    $params = $request->getParams();
    $userData = GenericDAO::validateUserByEmailAndPassword($params);
    if($userData != null){
        $tm = new TokenManager();
        $rv = $tm->getToken($userData);
        $response->getBody()->write($rv);
    }else{
        $response = $response->withStatus(204);
    }
    return $response;
});

$app->post('/permissions',function(Request $request, Response $response){
    $params = $request->getParams();
    $jwt = $params['headers']['jwt']['0'];
    $tm = new TokenManager();
    $rv = $tm->isValidToken($jwt);
    if($rv['isValidToken'] == true){
        $rv = GenericDAO::getPermissionsByUserRol($rv);
    }
    $response->getBody()->write(json_encode($rv));
    return $response;
});
$app->post('/Encuesta/encuesta', function ($request, $response, $args) {
	// $datosPost = $request->getParams(); //tomo lo que le mande por parametro y lo parse a php
    // //armo el objeto persona
    // $unaEncuesta = new Encuestas();
    // $unaEncuesta->nombre = $datosPost['nombre'];
    // $unaEncuesta->pregunta = $datosPost['pregunta'];
    // $unaEncuesta->respuesta1 = $datosPost['respuesta1'];
    // $unaEncuesta->respuesta2 = $datosPost['respuesta2'];
    // $unaEncuesta->respuesta3 = $datosPost['respuesta3'];
    // Encuestas::InsertarEncuesta($unaEncuesta);
    // $response->write("Persona insertada con exito -->");
    // return $response;

    $datosPost = $request->getQueryParams(); //tomo lo que le mande por parametro y lo parse a php

   $unaEncuesta = Encuestas();
  $unaEncuestaJson = json_encode($unaEncuesta);

   Encuestas::InsertarEncuesta($unaEncuestaJson);
    $response->write("Encuesta insertada con exito -->");
    return $response;
});

$app->run();
?>