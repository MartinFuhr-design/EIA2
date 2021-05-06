"use strict";
var myCanvas;
(function (myCanvas) {
    window.addEventListener("load", handleLoad);
    let canvas;
    let crc2;
    function handleLoad(_event) {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        canvas.width = 600; //canvas Hight
        canvas.height = 600; //canvas Width 
        let color = ["#2f2c29"];
        //Center Circle 
        for (let t = 0; t < 2; t++) {
            for (let i = 0; i < color.length; i++) {
                let x = Math.floor(Math.random() * Math.floor(canvas.width));
                let y = Math.floor(Math.random() * Math.floor(canvas.height));
                crc2.beginPath();
                crc2.arc(x, y, 100, 0, 2 * Math.PI, false);
                crc2.fillStyle = color[i];
                crc2.fill();
                crc2.closePath();
                crc2.stroke();
            }
        }
    }
})(myCanvas || (myCanvas = {}));
//# sourceMappingURL=GenerativeArt_Script.js.map