namespace L11_BlumenwieseUpdate {
    export class FlowerYellow extends SubFlower {
        protected position: Vector;
        protected fillLevel: number;
        protected velocity: Vector;

        constructor(_fillLevel?: number, _position?: Vector) {
            super(_position);

            let horizon: number = crc2.canvas.height * golden;
            let posX: number = Math.floor(Math.random() * crc2.canvas.width);
            let posY: number = horizon + Math.floor(Math.random() * 250);
            if (_position)
                this.position = _position.copy();
            else
                this.position = new Vector(posX, posY);

                
            let randomFill: number = Math.floor(Math.random() * 50);
           
            if (_fillLevel)
                this.fillLevel = _fillLevel;
            else
                this.fillLevel = randomFill;
            
            this.velocity = new Vector(0, 0);

        }


        public fill(_timeslice: number): void {
            for (let i: number = 0; i < 10; i++) {
                crc2.beginPath();
                crc2.fillRect(this.position.x + 25, this.position.y - 5, 4, this.fillLevel);
                crc2.closePath();
                crc2.fillStyle = "yellow";
                crc2.strokeStyle = "yellow";
                crc2.fill();
                crc2.stroke();
                }
            let offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
    
            if (this.fillLevel < 50)
                    this.fillLevel += 0.03;
            if (this.fillLevel > 50) //wenns voll ist fängts von vorne an
                    this.fillLevel -= this.fillLevel;
        }
        public draw (): void {

        //stalk
            crc2.beginPath();
            crc2.strokeStyle = "RGB(42,128,33)";
            crc2.fillStyle = "RGB(42,128,33)";
            crc2.fillRect(this.position.x, this.position.y, 4, 50);

        //color leaf
            crc2.moveTo(this.position.x, this.position.y + 50);
            crc2.stroke();
            crc2.fill();

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            for (let i: number = 80; i > 8; i -= 8) {
            crc2.rotate(45 * Math.PI / 20);
            crc2.beginPath();
            crc2.moveTo(10, 20);
            crc2.bezierCurveTo(-12, -25, 12, -25, 7, -10);
            crc2.fillStyle = "RGB(232,211,10";
            crc2.strokeStyle = "RGB(232,211,10";
            crc2.fill();

            crc2.stroke();

        }
            crc2.restore();

        //color inside
            crc2.save();
            crc2.beginPath();
            moveTo(this.position.x + 10, this.position.y + 20);
            crc2.arc(this.position.x, this.position.y, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "RGB(98,47,0";
            crc2.strokeStyle = "RGB(98,47,0";
            crc2.fill();
            crc2.stroke();
            crc2.restore();
        }
    }
}
