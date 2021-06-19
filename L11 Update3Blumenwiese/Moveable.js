"use strict";
var L11_BlumenwieseUpdate;
(function (L11_BlumenwieseUpdate) {
    class Moveable {
        constructor(_position) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L11_BlumenwieseUpdate.Vector(0, 0);
            this.velocity = new L11_BlumenwieseUpdate.Vector(0, 0);
        }
        move(_timeslice) {
            // console.log("Moveable move");
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L11_BlumenwieseUpdate.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L11_BlumenwieseUpdate.crc2.canvas.height;
            if (this.position.x > L11_BlumenwieseUpdate.crc2.canvas.width)
                this.position.x -= L11_BlumenwieseUpdate.crc2.canvas.width;
            if (this.position.y > L11_BlumenwieseUpdate.crc2.canvas.height)
                this.position.y -= L11_BlumenwieseUpdate.crc2.canvas.height;
        }
        draw() {
            // console.log("Moveable move");
        }
    }
    L11_BlumenwieseUpdate.Moveable = Moveable;
})(L11_BlumenwieseUpdate || (L11_BlumenwieseUpdate = {}));
//# sourceMappingURL=Moveable.js.map