"use strict";
var L11_BlumenwieseUpdate;
(function (L11_BlumenwieseUpdate) {
    class SubFlower {
        constructor(_position) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L11_BlumenwieseUpdate.Vector(0, 0);
            this.velocity = new L11_BlumenwieseUpdate.Vector(0, 0);
        }
        fill(_timeslice) {
            // console.log("fill"); 
        }
        draw() {
            // console.log("draw");
        }
    }
    L11_BlumenwieseUpdate.SubFlower = SubFlower;
})(L11_BlumenwieseUpdate || (L11_BlumenwieseUpdate = {}));
//# sourceMappingURL=SubFlower.js.map