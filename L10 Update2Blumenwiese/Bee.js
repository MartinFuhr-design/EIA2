"use strict";
var L10_BlumenwieseUpdate;
(function (L10_BlumenwieseUpdate) {
    class Bee extends L10_BlumenwieseUpdate.Moveable {
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new L10_BlumenwieseUpdate.Vector(300, 400);
            this.velocity = new L10_BlumenwieseUpdate.Vector(50, 0);
            this.velocity.random(120, 20);
        }
        move(_timeslice) {
            let offset = new L10_BlumenwieseUpdate.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L10_BlumenwieseUpdate.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L10_BlumenwieseUpdate.crc2.canvas.height;
            if (this.position.x > L10_BlumenwieseUpdate.crc2.canvas.width)
                this.position.x -= L10_BlumenwieseUpdate.crc2.canvas.width;
            if (this.position.y > L10_BlumenwieseUpdate.crc2.canvas.height)
                this.position.y -= L10_BlumenwieseUpdate.crc2.canvas.height;
        }
        draw() {
            L10_BlumenwieseUpdate.crc2.save();
            //wings
            L10_BlumenwieseUpdate.crc2.save();
            L10_BlumenwieseUpdate.crc2.beginPath();
            L10_BlumenwieseUpdate.crc2.arc(this.position.x - 4, this.position.y - 11, 10, 0, 2 * Math.PI);
            L10_BlumenwieseUpdate.crc2.strokeStyle = "black";
            L10_BlumenwieseUpdate.crc2.fillStyle = "RGB(235,230,197)";
            L10_BlumenwieseUpdate.crc2.fill();
            L10_BlumenwieseUpdate.crc2.closePath();
            L10_BlumenwieseUpdate.crc2.stroke();
            L10_BlumenwieseUpdate.crc2.save();
            L10_BlumenwieseUpdate.crc2.beginPath();
            L10_BlumenwieseUpdate.crc2.arc(this.position.x + 4, this.position.y - 11, 10, 0, 2 * Math.PI);
            L10_BlumenwieseUpdate.crc2.strokeStyle = "black";
            L10_BlumenwieseUpdate.crc2.fillStyle = "RGB(235,230,197)";
            L10_BlumenwieseUpdate.crc2.fill();
            L10_BlumenwieseUpdate.crc2.closePath();
            L10_BlumenwieseUpdate.crc2.stroke();
            L10_BlumenwieseUpdate.crc2.beginPath();
            //body
            L10_BlumenwieseUpdate.crc2.ellipse(this.position.x, this.position.y, 10, 20, 300, 0, 2 * Math.PI);
            L10_BlumenwieseUpdate.crc2.strokeStyle = "RGB(219,184,23)";
            L10_BlumenwieseUpdate.crc2.fillStyle = "RGB(219,184,23)";
            L10_BlumenwieseUpdate.crc2.fill();
            L10_BlumenwieseUpdate.crc2.closePath();
            //stripes
            L10_BlumenwieseUpdate.crc2.beginPath();
            L10_BlumenwieseUpdate.crc2.moveTo(this.position.x - 10, this.position.y + 9);
            L10_BlumenwieseUpdate.crc2.lineTo(this.position.x - 10, this.position.y - 9);
            L10_BlumenwieseUpdate.crc2.moveTo(this.position.x, this.position.y + 10);
            L10_BlumenwieseUpdate.crc2.lineTo(this.position.x, this.position.y - 10);
            L10_BlumenwieseUpdate.crc2.moveTo(this.position.x + 10, this.position.y + 9);
            L10_BlumenwieseUpdate.crc2.lineTo(this.position.x + 10, this.position.y - 9);
            L10_BlumenwieseUpdate.crc2.strokeStyle = "black";
            L10_BlumenwieseUpdate.crc2.lineWidth = 5;
            L10_BlumenwieseUpdate.crc2.stroke();
            L10_BlumenwieseUpdate.crc2.closePath();
            L10_BlumenwieseUpdate.crc2.restore();
            L10_BlumenwieseUpdate.crc2.restore();
        }
    }
    L10_BlumenwieseUpdate.Bee = Bee;
})(L10_BlumenwieseUpdate || (L10_BlumenwieseUpdate = {}));
//# sourceMappingURL=Bee.js.map