"use strict";
var L11_BlumenwieseUpdate;
(function (L11_BlumenwieseUpdate) {
    class FlowerRed extends L11_BlumenwieseUpdate.SubFlower {
        constructor(_fillLevel, _position) {
            super(_position);
            let horizon = L11_BlumenwieseUpdate.crc2.canvas.height * L11_BlumenwieseUpdate.golden;
            let posX = Math.floor(Math.random() * L11_BlumenwieseUpdate.crc2.canvas.width);
            let posY = horizon + Math.floor(Math.random() * 250);
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L11_BlumenwieseUpdate.Vector(posX, posY);
            let randomFill = Math.floor(Math.random() * 50);
            if (_fillLevel)
                this.fillLevel = _fillLevel;
            else
                this.fillLevel = randomFill;
            this.velocity = new L11_BlumenwieseUpdate.Vector(0, 0);
        }
        fill(_timeslice) {
            for (let i = 0; i < 10; i++) {
                L11_BlumenwieseUpdate.crc2.beginPath();
                L11_BlumenwieseUpdate.crc2.fillRect(this.position.x + 25, this.position.y - 5, 4, this.fillLevel);
                L11_BlumenwieseUpdate.crc2.closePath();
                L11_BlumenwieseUpdate.crc2.fillStyle = "red";
                L11_BlumenwieseUpdate.crc2.strokeStyle = "red";
                L11_BlumenwieseUpdate.crc2.fill();
                L11_BlumenwieseUpdate.crc2.stroke();
            }
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.fillLevel < 50)
                this.fillLevel += 0.03;
            if (this.fillLevel > 50)
                this.fillLevel -= this.fillLevel;
        }
        draw() {
            //stalk
            L11_BlumenwieseUpdate.crc2.beginPath();
            L11_BlumenwieseUpdate.crc2.strokeStyle = "RGB(42,128,33)";
            L11_BlumenwieseUpdate.crc2.fillStyle = "RGB(42,128,33)";
            L11_BlumenwieseUpdate.crc2.fillRect(this.position.x, this.position.y, 4, 50); //PositionX, PositionY, stalk width, stalk height
            //leaf
            L11_BlumenwieseUpdate.crc2.moveTo(this.position.x, this.position.y + 50);
            L11_BlumenwieseUpdate.crc2.stroke();
            L11_BlumenwieseUpdate.crc2.fill();
            L11_BlumenwieseUpdate.crc2.save();
            //color leafs
            L11_BlumenwieseUpdate.crc2.translate(this.position.x, this.position.y);
            for (let i = 0; i < 5; i++) {
                L11_BlumenwieseUpdate.crc2.rotate(Math.PI * 2 / 5);
                L11_BlumenwieseUpdate.crc2.beginPath();
                L11_BlumenwieseUpdate.crc2.moveTo(10, 10);
                L11_BlumenwieseUpdate.crc2.lineTo(-7, -10);
                L11_BlumenwieseUpdate.crc2.bezierCurveTo(-12, -25, 12, -25, 7, -10);
                L11_BlumenwieseUpdate.crc2.closePath();
                L11_BlumenwieseUpdate.crc2.fillStyle = "RGB(161,37,37";
                L11_BlumenwieseUpdate.crc2.fill();
            }
            L11_BlumenwieseUpdate.crc2.restore();
            //color inside
            L11_BlumenwieseUpdate.crc2.save();
            L11_BlumenwieseUpdate.crc2.translate(this.position.x, this.position.y);
            L11_BlumenwieseUpdate.crc2.beginPath();
            L11_BlumenwieseUpdate.crc2.arc(0, 0, 7, 0, 2 * Math.PI);
            L11_BlumenwieseUpdate.crc2.closePath();
            L11_BlumenwieseUpdate.crc2.fillStyle = "RGB(242,209,29";
            L11_BlumenwieseUpdate.crc2.fill();
            L11_BlumenwieseUpdate.crc2.restore();
        }
    }
    L11_BlumenwieseUpdate.FlowerRed = FlowerRed;
})(L11_BlumenwieseUpdate || (L11_BlumenwieseUpdate = {}));
//# sourceMappingURL=FlowerRed.js.map