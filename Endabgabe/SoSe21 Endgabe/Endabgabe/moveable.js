"use strict";
/*
Aufgabe: <Abschlussarbeit S21>
Name: <Martin Fuhr>
Matrikel: <266629>
Datum: <19.07.2021>
Quellen: <Kommilitonen mit denen ich zusammengearbeitet habe: Moritz Hinderer, Tristan Trefz, Julian Himmel, weitere Quellen: Inverted Classroon, Internet>
*/
var Endabgabe;
(function (Endabgabe) {
    //super class to handle movable objects
    class Movable {
        constructor(_position) {
            this.position = _position;
            this.speed = 1;
            this.speedLevel = 1;
            this.slowDown = false;
            this.radius = 2;
        }
        setColor(color) {
            this.color = color;
        }
        getRadius() {
            return this.radius * Endabgabe.scale;
        }
        setRadius(radius) {
            this.radius = radius;
        }
        setTarget(target) {
            this.target = target;
        }
        getTarget() {
            return this.target;
        }
        getPosition() {
            return this.position;
        }
        setPosition(position) {
            this.position = position;
        }
        getSpeed() {
            return this.speed;
        }
        setSpeed(speed) {
            this.speed = speed;
        }
        //moves object to target
        move(target) {
            if (!target) {
                return;
            }
            //calculate difference vector
            const diffVectr = new Endabgabe.Vector(target.X - this.position.X, target.Y - this.position.Y);
            //calculate length of difference vector and return if 0
            const vectorLength = Math.sqrt(Math.pow(diffVectr.X, 2) + Math.pow(diffVectr.Y, 2));
            if (vectorLength == 0) {
                return;
            }
            //calculate speed by movable properties
            const speedLevel = this.speedLevel * (this.speed / 100);
            //apply slow down if activated (Ball)
            const speed = this.slowDown ? speedLevel * (vectorLength / 100) : speedLevel;
            //calculate scaling
            const scaleFactor = speed / vectorLength;
            //apply scaling to difference
            diffVectr.scale(scaleFactor);
            //add difference to current pos
            this.position.add(diffVectr);
        }
    }
    Endabgabe.Movable = Movable;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=moveable.js.map