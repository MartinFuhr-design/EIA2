namespace L11_BlumenwieseUpdate {
    export class FlowerRed extends SubFlower {
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
                crc2.fillStyle = "red";
                crc2.strokeStyle = "red";
                crc2.fill();
                crc2.stroke();
                }
            let offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
    
            if (this.fillLevel < 50)
                    this.fillLevel += 0.03;
            if (this.fillLevel > 50)
                    this.fillLevel -= this.fillLevel;
        }

        public draw (): void {

        //stalk
            crc2.beginPath();
            crc2.strokeStyle = "RGB(42,128,33)";
            crc2.fillStyle = "RGB(42,128,33)";
            crc2.fillRect(this.position.x, this.position.y, 4, 50); //PositionX, PositionY, stalk width, stalk height

        //leaf
            crc2.moveTo(this.position.x, this.position.y + 50);
            crc2.stroke();
            crc2.fill();
            crc2.save();

        //color leafs
            crc2.translate(this.position.x, this.position.y);
            for (let i: number = 0; i < 5; i++) {
            crc2.rotate(Math.PI * 2 / 5);
            crc2.beginPath();
            crc2.moveTo(10, 10);
            crc2.lineTo(-7, -10);
            crc2.bezierCurveTo(-12, -25, 12, -25, 7, -10);
            crc2.closePath();
            crc2.fillStyle = "RGB(161,37,37";
            crc2.fill();
        }
            crc2.restore();

        //color inside
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(0, 0, 7, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "RGB(242,209,29";
            crc2.fill();

            crc2.restore();
        }
    }
    }