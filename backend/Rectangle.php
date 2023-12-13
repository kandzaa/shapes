<?php
include_once "Shape.php";

class Rectangle extends Shape {
    protected $width;
    protected $height;

    public function __construct($width, $height, $color){
        parent::__construct($color);
        $this->width = intval($width);
        $this->height = intval($height);
    }

    public function calculateArea() {
        return $this->width * $this->height;
    }

    public function getWidth() {
        return $this->width;
    }

    public function getColor() {
        return $this->color;
    }

    public function getHeight() {
        return $this->height;
    }
}
?>
