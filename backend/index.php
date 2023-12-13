<?php
header("Access-Control-Allow-Origin: *");

include_once "Rectangle.php";
include_once "Circle.php";

$rectangle = new Rectangle(50, 80, "blue");
$circle = new Circle(69, "red");

$shapes = [
    [
        'shape' => 'Rectangle',
        'color' => $rectangle->getColor(),
        'width' => $rectangle->getWidth(),
        'height' => $rectangle->getHeight(),
        'area' => $rectangle->calculateArea()
    ],
    [
        'shape' => 'Circle',
        'color' => $circle->getColor(),
        'radius' => $circle->getRadius(),
        'area' => $circle->calculateArea()
    ]
];

echo json_encode($shapes);

return;