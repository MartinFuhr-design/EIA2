"use strict";
var L09_BlumenwieseUpdate;
(function (L09_BlumenwieseUpdate) {
    //Thanks for the Help @Lisa
    let imageData;
    let cloudArray = [];
    let beeArray = [];
    //HandleLoad
    window.addEventListener("load", handleLoad);
    L09_BlumenwieseUpdate.golden = 0.62;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_BlumenwieseUpdate.crc2 = canvas.getContext("2d");
        let horizon = L09_BlumenwieseUpdate.crc2.canvas.height * L09_BlumenwieseUpdate.golden;
        let posMountains = { x: 0, y: horizon };
        drawBackground();
        drawSun({ x: 100, y: 75 });
        createClouds(270, 75);
        window.setInterval(moveCloud, 50);
        drawMountains(posMountains, 75, 200, "grey", "white");
        drawMountains(posMountains, 50, 150, "grey", "lightgrey");
        drawTree({ x: 280, y: 280 });
        for (let i = 0; i < 10; i++) {
            drawFlowerRed();
            drawFlowerYellow();
        }
        drawHome();
        imageData = L09_BlumenwieseUpdate.crc2.getImageData(0, 0, L09_BlumenwieseUpdate.crc2.canvas.width, L09_BlumenwieseUpdate.crc2.canvas.height);
        createBee();
        window.setInterval(moveBee, 20);
    }
    //Bees
    function createBee() {
        for (let i = 0; i < 10; i++) {
            let bee = new L09_BlumenwieseUpdate.Bee(0.8);
            beeArray.push(bee);
        }
    }
    function moveBee() {
        for (let bee of beeArray) {
            bee.move(1 / 40);
            bee.draw();
        }
    }
    //Clouds
    function createClouds() {
        for (let i = 0; i < 1; i++) {
            let cloud = new L09_BlumenwieseUpdate.Cloud({ x: 270, y: 75 });
            cloudArray.push(cloud);
        }
    }
    function moveCloud() {
        L09_BlumenwieseUpdate.crc2.clearRect(0, 0, L09_BlumenwieseUpdate.crc2.canvas.width, L09_BlumenwieseUpdate.crc2.canvas.height);
        L09_BlumenwieseUpdate.crc2.putImageData(imageData, 0, 0);
        for (let cloud of cloudArray) {
            cloud.move(1 / 50);
            cloud.draw();
        }
    }
    //Background
    function drawBackground() {
        console.log("Background");
        let gradient = L09_BlumenwieseUpdate.crc2.createLinearGradient(0, 0, 0, L09_BlumenwieseUpdate.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(L09_BlumenwieseUpdate.golden, "orange");
        gradient.addColorStop(1, "HSL(100, 70%, 20%)");
        L09_BlumenwieseUpdate.crc2.fillStyle = gradient;
        L09_BlumenwieseUpdate.crc2.fillRect(0, 0, L09_BlumenwieseUpdate.crc2.canvas.width, L09_BlumenwieseUpdate.crc2.canvas.height);
    }
    //Sun
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 140;
        let gradient = L09_BlumenwieseUpdate.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 150%, 50%, 1)");
        gradient.addColorStop(1, "HSLA(20, 100%, 50%, 0)");
        L09_BlumenwieseUpdate.crc2.save();
        L09_BlumenwieseUpdate.crc2.translate(_position.x, _position.y);
        L09_BlumenwieseUpdate.crc2.fillStyle = gradient;
        L09_BlumenwieseUpdate.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L09_BlumenwieseUpdate.crc2.fill();
        L09_BlumenwieseUpdate.crc2.restore();
    }
    //Moutains
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        L09_BlumenwieseUpdate.crc2.save();
        L09_BlumenwieseUpdate.crc2.translate(_position.x, _position.y);
        L09_BlumenwieseUpdate.crc2.beginPath();
        L09_BlumenwieseUpdate.crc2.moveTo(0, 0);
        L09_BlumenwieseUpdate.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L09_BlumenwieseUpdate.crc2.lineTo(x, y);
        } while (x < L09_BlumenwieseUpdate.crc2.canvas.width);
        L09_BlumenwieseUpdate.crc2.lineTo(x, 0);
        L09_BlumenwieseUpdate.crc2.closePath();
        let gradient = L09_BlumenwieseUpdate.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.8, _colorHigh);
        L09_BlumenwieseUpdate.crc2.fillStyle = gradient;
        L09_BlumenwieseUpdate.crc2.fill();
        L09_BlumenwieseUpdate.crc2.restore();
    }
    //Tree
    function drawTree(_position) {
        //evergreen tree
        L09_BlumenwieseUpdate.crc2.save();
        L09_BlumenwieseUpdate.crc2.beginPath();
        L09_BlumenwieseUpdate.crc2.rect(_position.x, _position.y, 20, 100);
        L09_BlumenwieseUpdate.crc2.fillStyle = "RGB(94,47,0)";
        L09_BlumenwieseUpdate.crc2.fill();
        L09_BlumenwieseUpdate.crc2.closePath();
        L09_BlumenwieseUpdate.crc2.beginPath();
        L09_BlumenwieseUpdate.crc2.moveTo(220, 300);
        L09_BlumenwieseUpdate.crc2.lineTo(360, 300);
        L09_BlumenwieseUpdate.crc2.lineTo(290, 200);
        L09_BlumenwieseUpdate.crc2.closePath();
        L09_BlumenwieseUpdate.crc2.fillStyle = "RGB(85,95,47)";
        L09_BlumenwieseUpdate.crc2.fill();
        L09_BlumenwieseUpdate.crc2.strokeStyle = "RGB(85,107,47)";
        L09_BlumenwieseUpdate.crc2.stroke();
        L09_BlumenwieseUpdate.crc2.moveTo(230, 240);
        L09_BlumenwieseUpdate.crc2.lineTo(350, 240);
        L09_BlumenwieseUpdate.crc2.lineTo(290, 130);
        L09_BlumenwieseUpdate.crc2.closePath();
        L09_BlumenwieseUpdate.crc2.fillStyle = "RGB(85,107,47)";
        L09_BlumenwieseUpdate.crc2.fill();
        L09_BlumenwieseUpdate.crc2.stroke();
        L09_BlumenwieseUpdate.crc2.restore();
        L09_BlumenwieseUpdate.crc2.closePath();
        //broadleaf tree
        L09_BlumenwieseUpdate.crc2.save();
        L09_BlumenwieseUpdate.crc2.beginPath();
        L09_BlumenwieseUpdate.crc2.rect(_position.x + 200, _position.y - 20, 20, 120);
        L09_BlumenwieseUpdate.crc2.fillStyle = "RGB(94,47,0)";
        L09_BlumenwieseUpdate.crc2.fill();
        L09_BlumenwieseUpdate.crc2.closePath();
        L09_BlumenwieseUpdate.crc2.beginPath();
        L09_BlumenwieseUpdate.crc2.moveTo(_position.x + 210, _position.y + 30);
        L09_BlumenwieseUpdate.crc2.lineWidth = 10;
        L09_BlumenwieseUpdate.crc2.fillStyle = "RGB(94,47,0)";
        L09_BlumenwieseUpdate.crc2.fill();
        L09_BlumenwieseUpdate.crc2.strokeStyle = "RGB(94,47,0)";
        L09_BlumenwieseUpdate.crc2.stroke();
        L09_BlumenwieseUpdate.crc2.closePath();
        L09_BlumenwieseUpdate.crc2.fillStyle = "#487047";
        L09_BlumenwieseUpdate.crc2.beginPath();
        L09_BlumenwieseUpdate.crc2.arc(_position.x + 150, _position.y - 100, 45, 0, 2 * Math.PI);
        L09_BlumenwieseUpdate.crc2.fill();
        L09_BlumenwieseUpdate.crc2.closePath();
        L09_BlumenwieseUpdate.crc2.beginPath();
        L09_BlumenwieseUpdate.crc2.arc(_position.x + 200, _position.y - 50, 40, 0, 2 * Math.PI);
        L09_BlumenwieseUpdate.crc2.fill();
        L09_BlumenwieseUpdate.crc2.closePath();
        L09_BlumenwieseUpdate.crc2.beginPath();
        L09_BlumenwieseUpdate.crc2.arc(_position.x + 250, _position.y - 60, 40, 0, 2 * Math.PI);
        L09_BlumenwieseUpdate.crc2.fill();
        L09_BlumenwieseUpdate.crc2.closePath();
        L09_BlumenwieseUpdate.crc2.beginPath();
        L09_BlumenwieseUpdate.crc2.arc(_position.x + 220, _position.y - 150, 50, 0, 2 * Math.PI);
        L09_BlumenwieseUpdate.crc2.fill();
        L09_BlumenwieseUpdate.crc2.closePath();
        L09_BlumenwieseUpdate.crc2.beginPath();
        L09_BlumenwieseUpdate.crc2.arc(_position.x + 270, _position.y - 105, 30, 0, 2 * Math.PI);
        L09_BlumenwieseUpdate.crc2.fill();
        L09_BlumenwieseUpdate.crc2.closePath();
        L09_BlumenwieseUpdate.crc2.beginPath();
        L09_BlumenwieseUpdate.crc2.arc(_position.x + 200, _position.y - 100, 50, 0, 2 * Math.PI);
        L09_BlumenwieseUpdate.crc2.fill();
        L09_BlumenwieseUpdate.crc2.closePath();
    }
    //Bee Home
    function drawHome() {
        L09_BlumenwieseUpdate.crc2.restore();
        //main house
        L09_BlumenwieseUpdate.crc2.beginPath();
        L09_BlumenwieseUpdate.crc2.arc(300, 400, 50, 0, 2 * Math.PI);
        L09_BlumenwieseUpdate.crc2.fillStyle = "RGB(178,134,92)";
        L09_BlumenwieseUpdate.crc2.fill();
        L09_BlumenwieseUpdate.crc2.closePath();
        //stripes
        L09_BlumenwieseUpdate.crc2.beginPath();
        L09_BlumenwieseUpdate.crc2.moveTo(345, 420);
        L09_BlumenwieseUpdate.crc2.lineTo(255, 420);
        L09_BlumenwieseUpdate.crc2.moveTo(350, 400);
        L09_BlumenwieseUpdate.crc2.lineTo(250, 400);
        L09_BlumenwieseUpdate.crc2.moveTo(345, 380);
        L09_BlumenwieseUpdate.crc2.lineTo(255, 380);
        L09_BlumenwieseUpdate.crc2.moveTo(350, 360);
        L09_BlumenwieseUpdate.crc2.strokeStyle = "black";
        L09_BlumenwieseUpdate.crc2.lineWidth = 2;
        L09_BlumenwieseUpdate.crc2.stroke();
        L09_BlumenwieseUpdate.crc2.closePath();
        //entrance
        L09_BlumenwieseUpdate.crc2.beginPath();
        L09_BlumenwieseUpdate.crc2.arc(300, 420, 10, 0, 2 * Math.PI);
        L09_BlumenwieseUpdate.crc2.fillStyle = "black";
        L09_BlumenwieseUpdate.crc2.fill();
        L09_BlumenwieseUpdate.crc2.closePath();
        //Ast
        L09_BlumenwieseUpdate.crc2.beginPath();
        // crc2.moveTo(0, 300);
        L09_BlumenwieseUpdate.crc2.fillStyle = "RGB(144,90,39)";
        L09_BlumenwieseUpdate.crc2.fillRect(250, 440, 100, 20);
        L09_BlumenwieseUpdate.crc2.closePath();
        L09_BlumenwieseUpdate.crc2.save();
    }
    // red Flower
    function drawFlowerRed() {
        let horizon = L09_BlumenwieseUpdate.crc2.canvas.height * L09_BlumenwieseUpdate.golden;
        let posX = Math.floor(Math.random() * L09_BlumenwieseUpdate.crc2.canvas.width);
        let posY = horizon + Math.floor(Math.random() * 250);
        //stalk
        L09_BlumenwieseUpdate.crc2.beginPath();
        L09_BlumenwieseUpdate.crc2.strokeStyle = "RGB(42,128,33)";
        L09_BlumenwieseUpdate.crc2.fillStyle = "RGB(42,128,33)";
        L09_BlumenwieseUpdate.crc2.fillRect(posX, posY, 4, 50); //PositionX, PositionY, stalk width, stalk height
        //leaf
        L09_BlumenwieseUpdate.crc2.moveTo(posX, posY + 50);
        L09_BlumenwieseUpdate.crc2.stroke();
        L09_BlumenwieseUpdate.crc2.fill();
        L09_BlumenwieseUpdate.crc2.save();
        //color leafs
        L09_BlumenwieseUpdate.crc2.translate(posX, posY);
        for (let i = 0; i < 5; i++) {
            L09_BlumenwieseUpdate.crc2.rotate(Math.PI * 2 / 5);
            L09_BlumenwieseUpdate.crc2.beginPath();
            L09_BlumenwieseUpdate.crc2.moveTo(10, 10);
            L09_BlumenwieseUpdate.crc2.lineTo(-7, -10);
            L09_BlumenwieseUpdate.crc2.bezierCurveTo(-12, -25, 12, -25, 7, -10);
            L09_BlumenwieseUpdate.crc2.closePath();
            L09_BlumenwieseUpdate.crc2.fillStyle = "RGB(161,37,37";
            L09_BlumenwieseUpdate.crc2.fill();
        }
        L09_BlumenwieseUpdate.crc2.restore();
        //color inside
        L09_BlumenwieseUpdate.crc2.save();
        L09_BlumenwieseUpdate.crc2.translate(posX, posY);
        L09_BlumenwieseUpdate.crc2.beginPath();
        L09_BlumenwieseUpdate.crc2.arc(0, 0, 7, 0, 2 * Math.PI);
        L09_BlumenwieseUpdate.crc2.closePath();
        L09_BlumenwieseUpdate.crc2.fillStyle = "RGB(242,209,29";
        L09_BlumenwieseUpdate.crc2.fill();
        L09_BlumenwieseUpdate.crc2.restore();
    }
    function drawFlowerYellow() {
        let horizon = L09_BlumenwieseUpdate.crc2.canvas.height * L09_BlumenwieseUpdate.golden;
        let posX = Math.floor(Math.random() * L09_BlumenwieseUpdate.crc2.canvas.width);
        let posY = horizon + Math.floor(Math.random() * 250);
        //stalk
        L09_BlumenwieseUpdate.crc2.beginPath();
        L09_BlumenwieseUpdate.crc2.strokeStyle = "RGB(42,128,33)";
        L09_BlumenwieseUpdate.crc2.fillStyle = "RGB(42,128,33)";
        L09_BlumenwieseUpdate.crc2.fillRect(posX, posY, 4, 50);
        //color leaf
        L09_BlumenwieseUpdate.crc2.moveTo(posX, posY + 50);
        L09_BlumenwieseUpdate.crc2.stroke();
        L09_BlumenwieseUpdate.crc2.fill();
        L09_BlumenwieseUpdate.crc2.save();
        L09_BlumenwieseUpdate.crc2.translate(posX, posY);
        for (let i = 80; i > 8; i -= 8) {
            L09_BlumenwieseUpdate.crc2.rotate(45 * Math.PI / 20);
            L09_BlumenwieseUpdate.crc2.beginPath();
            L09_BlumenwieseUpdate.crc2.moveTo(10, 20);
            L09_BlumenwieseUpdate.crc2.bezierCurveTo(-12, -25, 12, -25, 7, -10);
            L09_BlumenwieseUpdate.crc2.fillStyle = "RGB(232,211,10";
            L09_BlumenwieseUpdate.crc2.strokeStyle = "RGB(232,211,10";
            L09_BlumenwieseUpdate.crc2.fill();
            L09_BlumenwieseUpdate.crc2.stroke();
        }
        L09_BlumenwieseUpdate.crc2.restore();
        //color inside
        L09_BlumenwieseUpdate.crc2.save();
        L09_BlumenwieseUpdate.crc2.beginPath();
        moveTo(posX + 10, posY + 20);
        L09_BlumenwieseUpdate.crc2.arc(posX, posY, 5, 0, 2 * Math.PI);
        L09_BlumenwieseUpdate.crc2.fillStyle = "RGB(98,47,0";
        L09_BlumenwieseUpdate.crc2.strokeStyle = "RGB(98,47,0";
        L09_BlumenwieseUpdate.crc2.fill();
        L09_BlumenwieseUpdate.crc2.stroke();
        L09_BlumenwieseUpdate.crc2.restore();
    }
})(L09_BlumenwieseUpdate || (L09_BlumenwieseUpdate = {}));
//# sourceMappingURL=BlumenwieseUpdate_Script.js.map