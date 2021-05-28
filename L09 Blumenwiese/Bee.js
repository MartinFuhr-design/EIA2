"use strict";
var L09_BlumenwieseUpdate;
(function (L09_BlumenwieseUpdate) {
    class Bee {
        constructor(_size, _position) {
            if (_position)
                this.position = _position;
            else
                this.position = new L09_BlumenwieseUpdate.Vector(300, 400);
            this.velocity = new L09_BlumenwieseUpdate.Vector(50, 0);
            this.velocity.random(120, 20);
        }
        move(_timeslice) {
            let offset = new L09_BlumenwieseUpdate.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09_BlumenwieseUpdate.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09_BlumenwieseUpdate.crc2.canvas.height;
            if (this.position.x > L09_BlumenwieseUpdate.crc2.canvas.width)
                this.position.x -= L09_BlumenwieseUpdate.crc2.canvas.width;
            if (this.position.y > L09_BlumenwieseUpdate.crc2.canvas.height)
                this.position.y -= L09_BlumenwieseUpdate.crc2.canvas.height;
        }
        draw() {
            L09_BlumenwieseUpdate.crc2.save();
            //wings
            L09_BlumenwieseUpdate.crc2.save();
            L09_BlumenwieseUpdate.crc2.beginPath();
            L09_BlumenwieseUpdate.crc2.arc(this.position.x - 4, this.position.y - 11, 10, 0, 2 * Math.PI);
            L09_BlumenwieseUpdate.crc2.strokeStyle = "black";
            L09_BlumenwieseUpdate.crc2.fillStyle = "RGB(235,230,197)";
            L09_BlumenwieseUpdate.crc2.fill();
            L09_BlumenwieseUpdate.crc2.closePath();
            L09_BlumenwieseUpdate.crc2.stroke();
            L09_BlumenwieseUpdate.crc2.save();
            L09_BlumenwieseUpdate.crc2.beginPath();
            L09_BlumenwieseUpdate.crc2.arc(this.position.x + 4, this.position.y - 11, 10, 0, 2 * Math.PI);
            L09_BlumenwieseUpdate.crc2.strokeStyle = "black";
            L09_BlumenwieseUpdate.crc2.fillStyle = "RGB(235,230,197)";
            L09_BlumenwieseUpdate.crc2.fill();
            L09_BlumenwieseUpdate.crc2.closePath();
            L09_BlumenwieseUpdate.crc2.stroke();
            L09_BlumenwieseUpdate.crc2.beginPath();
            //body
            L09_BlumenwieseUpdate.crc2.ellipse(this.position.x, this.position.y, 10, 20, 300, 0, 2 * Math.PI);
            L09_BlumenwieseUpdate.crc2.strokeStyle = "RGB(219,184,23)";
            L09_BlumenwieseUpdate.crc2.fillStyle = "RGB(219,184,23)";
            L09_BlumenwieseUpdate.crc2.fill();
            L09_BlumenwieseUpdate.crc2.closePath();
            //stripes
            L09_BlumenwieseUpdate.crc2.beginPath();
            L09_BlumenwieseUpdate.crc2.moveTo(this.position.x - 10, this.position.y + 9);
            L09_BlumenwieseUpdate.crc2.lineTo(this.position.x - 10, this.position.y - 9);
            L09_BlumenwieseUpdate.crc2.moveTo(this.position.x, this.position.y + 10);
            L09_BlumenwieseUpdate.crc2.lineTo(this.position.x, this.position.y - 10);
            L09_BlumenwieseUpdate.crc2.moveTo(this.position.x + 10, this.position.y + 9);
            L09_BlumenwieseUpdate.crc2.lineTo(this.position.x + 10, this.position.y - 9);
            L09_BlumenwieseUpdate.crc2.strokeStyle = "black";
            L09_BlumenwieseUpdate.crc2.lineWidth = 5;
            L09_BlumenwieseUpdate.crc2.stroke();
            L09_BlumenwieseUpdate.crc2.closePath();
            L09_BlumenwieseUpdate.crc2.restore();
            L09_BlumenwieseUpdate.crc2.restore();
        }
    }
    L09_BlumenwieseUpdate.Bee = Bee;
})(L09_BlumenwieseUpdate || (L09_BlumenwieseUpdate = {}));
//# sourceMappingURL=Bee.js.map