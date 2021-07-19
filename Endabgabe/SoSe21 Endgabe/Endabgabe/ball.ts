/*
Aufgabe: <Abschlussarbeit S21>
Name: <Martin Fuhr>
Matrikel: <266629>
Datum: <19.07.2021>
Quellen: <Kommilitonen mit denen ich zusammengearbeitet habe: Moritz Hinderer, Tristan Trefz, Julian Himmel, weitere Quellen: Inverted Classroon, Internet>
*/

namespace Endabgabe {
    
     //class to handle ball
    export class Ball extends Movable {
        protected speed: number = 0;
        protected speedLevel: number = 10;

        constructor(_origin: Vector) {
            super(_origin);
            this.slowDown = true;
            this.radius = 1.5;
        }


        public draw(): void {
            ctx.save();

            ctx.beginPath();
            ctx.arc(this.position.X, this.position.Y, this.getRadius(), 0, 2 * Math.PI, false);
            ctx.fillStyle = "white";
            ctx.fill();
            ctx.lineWidth = 1;
            ctx.strokeStyle = "black";
            ctx.stroke();


            ctx.restore();
        }
    }
}