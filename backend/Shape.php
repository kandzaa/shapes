 <?php

abstract class Shape{
    protected $color;

    public function __construct($color){
        $this->color = $color;

    }
   
    abstract public function calculateArea();
}