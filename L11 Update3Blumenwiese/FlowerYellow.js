"use strict";
var L11_BlumenwieseUpdate;
(function (L11_BlumenwieseUpdate) {
    class FlowerYellow extends L11_BlumenwieseUpdate.SubFlower {
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
                L11_BlumenwieseUpdate.crc2.fillStyle = "yellow";
                L11_BlumenwieseUpdate.crc2.strokeStyle = "yellow";
                L11_BlumenwieseUpdate.crc2.fill();
                L11_BlumenwieseUpdate.crc2.stroke();
            }
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.fillLevel < 50)
                this.fillLevel += 0.03;
            if (this.fillLevel > 50) //wenns voll ist fängts von vorne an
                this.fillLevel -= this.fillLevel;
        }
        draw() {
            //stalk
            L11_BlumenwieseUpdate.crc2.beginPath();
            L11_BlumenwieseUpdate.crc2.strokeStyle = "RGB(42,128,33)";
            L11_BlumenwieseUpdate.crc2.fillStyle = "RGB(42,128,33)";
            L11_BlumenwieseUpdate.crc2.fillRect(this.position.x, this.position.y, 4, 50);
            //color leaf
            L11_BlumenwieseUpdate.crc2.moveTo(this.position.x, this.position.y + 50);
            L11_BlumenwieseUpdate.crc2.stroke();
            L11_BlumenwieseUpdate.crc2.fill();
            L11_BlumenwieseUpdate.crc2.save();
            L11_BlumenwieseUpdate.crc2.translate(this.position.x, this.position.y);
            for (let i = 80; i > 8; i -= 8) {
                L11_BlumenwieseUpdate.crc2.rotate(45 * Math.PI / 20);
                L11_BlumenwieseUpdate.crc2.beginPath();
                L11_BlumenwieseUpdate.crc2.moveTo(10, 20);
                L11_BlumenwieseUpdate.crc2.bezierCurveTo(-12, -25, 12, -25, 7, -10);
                L11_BlumenwieseUpdate.crc2.fillStyle = "RGB(232,211,10";
                L11_BlumenwieseUpdate.crc2.strokeStyle = "RGB(232,211,10";
                L11_BlumenwieseUpdate.crc2.fill();
                L11_BlumenwieseUpdate.crc2.stroke();
            }
            L11_BlumenwieseUpdate.crc2.restore();
            //color inside
            L11_BlumenwieseUpdate.crc2.save();
            L11_BlumenwieseUpdate.crc2.beginPath();
            moveTo(this.position.x + 10, this.position.y + 20);
            L11_BlumenwieseUpdate.crc2.arc(this.position.x, this.position.y, 5, 0, 2 * Math.PI);
            L11_BlumenwieseUpdate.crc2.fillStyle = "RGB(98,47,0";
            L11_BlumenwieseUpdate.crc2.strokeStyle = "RGB(98,47,0";
            L11_BlumenwieseUpdate.crc2.fill();
            L11_BlumenwieseUpdate.crc2.stroke();
            L11_BlumenwieseUpdate.crc2.restore();
        }
    }
    L11_BlumenwieseUpdate.FlowerYellow = FlowerYellow;
})(L11_BlumenwieseUpdate || (L11_BlumenwieseUpdate = {}));
//# sourceMappingURL=FlowerYellow.js.map