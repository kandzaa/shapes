<?php
include_once "Shape.php";

class Circle extends Shape {
    protected $radius;

    public function __construct($radius, $color){
        parent::__construct($color);
        $this->radius = floatval($radius);
    }

    public function calculateArea() {
        return pi() * ($this->radius * $this->radius);
    }

    public function getRadius() {
        return $this->radius;
    }
    public function getColor() {
        return $this->color;
    }

}
?>