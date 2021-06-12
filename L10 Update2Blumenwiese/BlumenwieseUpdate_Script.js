"use strict";
var L10_BlumenwieseUpdate;
(function (L10_BlumenwieseUpdate) {
    let moveables = [];
    //HandleLoad
    window.addEventListener("load", handleLoad);
    L10_BlumenwieseUpdate.golden = 0.62;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L10_BlumenwieseUpdate.crc2 = canvas.getContext("2d");
        let horizon = L10_BlumenwieseUpdate.crc2.canvas.height * L10_BlumenwieseUpdate.golden;
        let posMountains = { x: 0, y: horizon };
        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawMountains(posMountains, 75, 200, "grey", "white");
        drawMountains(posMountains, 50, 150, "grey", "lightgrey");
        drawTree({ x: 280, y: 280 });
        for (let i = 0; i < 10; i++) {
            drawFlowerRed();
            drawFlowerYellow();
        }
        drawHome();
        L10_BlumenwieseUpdate.imageData = L10_BlumenwieseUpdate.crc2.getImageData(0, 0, L10_BlumenwieseUpdate.crc2.canvas.width, L10_BlumenwieseUpdate.crc2.canvas.height);
        createClouds();
        createBee();
        window.setInterval(update, 20);
    }
    //Background
    function drawBackground() {
        console.log("Background");
        let gradient = L10_BlumenwieseUpdate.crc2.createLinearGradient(0, 0, 0, L10_BlumenwieseUpdate.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(L10_BlumenwieseUpdate.golden, "orange");
        gradient.addColorStop(1, "HSL(100, 70%, 20%)");
        L10_BlumenwieseUpdate.crc2.fillStyle = gradient;
        L10_BlumenwieseUpdate.crc2.fillRect(0, 0, L10_BlumenwieseUpdate.crc2.canvas.width, L10_BlumenwieseUpdate.crc2.canvas.height);
    }
    //Sun
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 140;
        let gradient = L10_BlumenwieseUpdate.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 150%, 50%, 1)");
        gradient.addColorStop(1, "HSLA(20, 100%, 50%, 0)");
        L10_BlumenwieseUpdate.crc2.save();
        L10_BlumenwieseUpdate.crc2.translate(_position.x, _position.y);
        L10_BlumenwieseUpdate.crc2.fillStyle = gradient;
        L10_BlumenwieseUpdate.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L10_BlumenwieseUpdate.crc2.fill();
        L10_BlumenwieseUpdate.crc2.restore();
    }
    //Moutains
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        L10_BlumenwieseUpdate.crc2.save();
        L10_BlumenwieseUpdate.crc2.translate(_position.x, _position.y);
        L10_BlumenwieseUpdate.crc2.beginPath();
        L10_BlumenwieseUpdate.crc2.moveTo(0, 0);
        L10_BlumenwieseUpdate.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L10_BlumenwieseUpdate.crc2.lineTo(x, y);
        } while (x < L10_BlumenwieseUpdate.crc2.canvas.width);
        L10_BlumenwieseUpdate.crc2.lineTo(x, 0);
        L10_BlumenwieseUpdate.crc2.closePath();
        let gradient = L10_BlumenwieseUpdate.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.8, _colorHigh);
        L10_BlumenwieseUpdate.crc2.fillStyle = gradient;
        L10_BlumenwieseUpdate.crc2.fill();
        L10_BlumenwieseUpdate.crc2.restore();
    }
    //Tree
    function drawTree(_position) {
        //evergreen tree
        L10_BlumenwieseUpdate.crc2.save();
        L10_BlumenwieseUpdate.crc2.beginPath();
        L10_BlumenwieseUpdate.crc2.rect(_position.x, _position.y, 20, 100);
        L10_BlumenwieseUpdate.crc2.fillStyle = "RGB(94,47,0)";
        L10_BlumenwieseUpdate.crc2.fill();
        L10_BlumenwieseUpdate.crc2.closePath();
        L10_BlumenwieseUpdate.crc2.beginPath();
        L10_BlumenwieseUpdate.crc2.moveTo(220, 300);
        L10_BlumenwieseUpdate.crc2.lineTo(360, 300);
        L10_BlumenwieseUpdate.crc2.lineTo(290, 200);
        L10_BlumenwieseUpdate.crc2.closePath();
        L10_BlumenwieseUpdate.crc2.fillStyle = "RGB(85,95,47)";
        L10_BlumenwieseUpdate.crc2.fill();
        L10_BlumenwieseUpdate.crc2.strokeStyle = "RGB(85,107,47)";
        L10_BlumenwieseUpdate.crc2.stroke();
        L10_BlumenwieseUpdate.crc2.moveTo(230, 240);
        L10_BlumenwieseUpdate.crc2.lineTo(350, 240);
        L10_BlumenwieseUpdate.crc2.lineTo(290, 130);
        L10_BlumenwieseUpdate.crc2.closePath();
        L10_BlumenwieseUpdate.crc2.fillStyle = "RGB(85,107,47)";
        L10_BlumenwieseUpdate.crc2.fill();
        L10_BlumenwieseUpdate.crc2.stroke();
        L10_BlumenwieseUpdate.crc2.restore();
        L10_BlumenwieseUpdate.crc2.closePath();
        //broadleaf tree
        L10_BlumenwieseUpdate.crc2.save();
        L10_BlumenwieseUpdate.crc2.beginPath();
        L10_BlumenwieseUpdate.crc2.rect(_position.x + 200, _position.y - 20, 20, 120);
        L10_BlumenwieseUpdate.crc2.fillStyle = "RGB(94,47,0)";
        L10_BlumenwieseUpdate.crc2.fill();
        L10_BlumenwieseUpdate.crc2.closePath();
        L10_BlumenwieseUpdate.crc2.beginPath();
        L10_BlumenwieseUpdate.crc2.moveTo(_position.x + 210, _position.y + 30);
        L10_BlumenwieseUpdate.crc2.lineWidth = 10;
        L10_BlumenwieseUpdate.crc2.fillStyle = "RGB(94,47,0)";
        L10_BlumenwieseUpdate.crc2.fill();
        L10_BlumenwieseUpdate.crc2.strokeStyle = "RGB(94,47,0)";
        L10_BlumenwieseUpdate.crc2.stroke();
        L10_BlumenwieseUpdate.crc2.closePath();
        L10_BlumenwieseUpdate.crc2.fillStyle = "#487047";
        L10_BlumenwieseUpdate.crc2.beginPath();
        L10_BlumenwieseUpdate.crc2.arc(_position.x + 150, _position.y - 100, 45, 0, 2 * Math.PI);
        L10_BlumenwieseUpdate.crc2.fill();
        L10_BlumenwieseUpdate.crc2.closePath();
        L10_BlumenwieseUpdate.crc2.beginPath();
        L10_BlumenwieseUpdate.crc2.arc(_position.x + 200, _position.y - 50, 40, 0, 2 * Math.PI);
        L10_BlumenwieseUpdate.crc2.fill();
        L10_BlumenwieseUpdate.crc2.closePath();
        L10_BlumenwieseUpdate.crc2.beginPath();
        L10_BlumenwieseUpdate.crc2.arc(_position.x + 250, _position.y - 60, 40, 0, 2 * Math.PI);
        L10_BlumenwieseUpdate.crc2.fill();
        L10_BlumenwieseUpdate.crc2.closePath();
        L10_BlumenwieseUpdate.crc2.beginPath();
        L10_BlumenwieseUpdate.crc2.arc(_position.x + 220, _position.y - 150, 50, 0, 2 * Math.PI);
        L10_BlumenwieseUpdate.crc2.fill();
        L10_BlumenwieseUpdate.crc2.closePath();
        L10_BlumenwieseUpdate.crc2.beginPath();
        L10_BlumenwieseUpdate.crc2.arc(_position.x + 270, _position.y - 105, 30, 0, 2 * Math.PI);
        L10_BlumenwieseUpdate.crc2.fill();
        L10_BlumenwieseUpdate.crc2.closePath();
        L10_BlumenwieseUpdate.crc2.beginPath();
        L10_BlumenwieseUpdate.crc2.arc(_position.x + 200, _position.y - 100, 50, 0, 2 * Math.PI);
        L10_BlumenwieseUpdate.crc2.fill();
        L10_BlumenwieseUpdate.crc2.closePath();
    }
    //Bee Home
    function drawHome() {
        L10_BlumenwieseUpdate.crc2.restore();
        //main house
        L10_BlumenwieseUpdate.crc2.beginPath();
        L10_BlumenwieseUpdate.crc2.arc(300, 400, 50, 0, 2 * Math.PI);
        L10_BlumenwieseUpdate.crc2.fillStyle = "RGB(178,134,92)";
        L10_BlumenwieseUpdate.crc2.fill();
        L10_BlumenwieseUpdate.crc2.closePath();
        //stripes
        L10_BlumenwieseUpdate.crc2.beginPath();
        L10_BlumenwieseUpdate.crc2.moveTo(345, 420);
        L10_BlumenwieseUpdate.crc2.lineTo(255, 420);
        L10_BlumenwieseUpdate.crc2.moveTo(350, 400);
        L10_BlumenwieseUpdate.crc2.lineTo(250, 400);
        L10_BlumenwieseUpdate.crc2.moveTo(345, 380);
        L10_BlumenwieseUpdate.crc2.lineTo(255, 380);
        L10_BlumenwieseUpdate.crc2.moveTo(350, 360);
        L10_BlumenwieseUpdate.crc2.strokeStyle = "black";
        L10_BlumenwieseUpdate.crc2.lineWidth = 2;
        L10_BlumenwieseUpdate.crc2.stroke();
        L10_BlumenwieseUpdate.crc2.closePath();
        //entrance
        L10_BlumenwieseUpdate.crc2.beginPath();
        L10_BlumenwieseUpdate.crc2.arc(300, 420, 10, 0, 2 * Math.PI);
        L10_BlumenwieseUpdate.crc2.fillStyle = "black";
        L10_BlumenwieseUpdate.crc2.fill();
        L10_BlumenwieseUpdate.crc2.closePath();
        //Ast
        L10_BlumenwieseUpdate.crc2.beginPath();
        // crc2.moveTo(0, 300);
        L10_BlumenwieseUpdate.crc2.fillStyle = "RGB(144,90,39)";
        L10_BlumenwieseUpdate.crc2.fillRect(250, 440, 100, 20);
        L10_BlumenwieseUpdate.crc2.closePath();
        L10_BlumenwieseUpdate.crc2.save();
    }
    // red Flower
    function drawFlowerRed() {
        let horizon = L10_BlumenwieseUpdate.crc2.canvas.height * L10_BlumenwieseUpdate.golden;
        let posX = Math.floor(Math.random() * L10_BlumenwieseUpdate.crc2.canvas.width);
        let posY = horizon + Math.floor(Math.random() * 250);
        //stalk
        L10_BlumenwieseUpdate.crc2.beginPath();
        L10_BlumenwieseUpdate.crc2.strokeStyle = "RGB(42,128,33)";
        L10_BlumenwieseUpdate.crc2.fillStyle = "RGB(42,128,33)";
        L10_BlumenwieseUpdate.crc2.fillRect(posX, posY, 4, 50); //PositionX, PositionY, stalk width, stalk height
        //leaf
        L10_BlumenwieseUpdate.crc2.moveTo(posX, posY + 50);
        L10_BlumenwieseUpdate.crc2.stroke();
        L10_BlumenwieseUpdate.crc2.fill();
        L10_BlumenwieseUpdate.crc2.save();
        //color leafs
        L10_BlumenwieseUpdate.crc2.translate(posX, posY);
        for (let i = 0; i < 5; i++) {
            L10_BlumenwieseUpdate.crc2.rotate(Math.PI * 2 / 5);
            L10_BlumenwieseUpdate.crc2.beginPath();
            L10_BlumenwieseUpdate.crc2.moveTo(10, 10);
            L10_BlumenwieseUpdate.crc2.lineTo(-7, -10);
            L10_BlumenwieseUpdate.crc2.bezierCurveTo(-12, -25, 12, -25, 7, -10);
            L10_BlumenwieseUpdate.crc2.closePath();
            L10_BlumenwieseUpdate.crc2.fillStyle = "RGB(161,37,37";
            L10_BlumenwieseUpdate.crc2.fill();
        }
        L10_BlumenwieseUpdate.crc2.restore();
        //color inside
        L10_BlumenwieseUpdate.crc2.save();
        L10_BlumenwieseUpdate.crc2.translate(posX, posY);
        L10_BlumenwieseUpdate.crc2.beginPath();
        L10_BlumenwieseUpdate.crc2.arc(0, 0, 7, 0, 2 * Math.PI);
        L10_BlumenwieseUpdate.crc2.closePath();
        L10_BlumenwieseUpdate.crc2.fillStyle = "RGB(242,209,29";
        L10_BlumenwieseUpdate.crc2.fill();
        L10_BlumenwieseUpdate.crc2.restore();
    }
    function drawFlowerYellow() {
        let horizon = L10_BlumenwieseUpdate.crc2.canvas.height * L10_BlumenwieseUpdate.golden;
        let posX = Math.floor(Math.random() * L10_BlumenwieseUpdate.crc2.canvas.width);
        let posY = horizon + Math.floor(Math.random() * 250);
        //stalk
        L10_BlumenwieseUpdate.crc2.beginPath();
        L10_BlumenwieseUpdate.crc2.strokeStyle = "RGB(42,128,33)";
        L10_BlumenwieseUpdate.crc2.fillStyle = "RGB(42,128,33)";
        L10_BlumenwieseUpdate.crc2.fillRect(posX, posY, 4, 50);
        //color leaf
        L10_BlumenwieseUpdate.crc2.moveTo(posX, posY + 50);
        L10_BlumenwieseUpdate.crc2.stroke();
        L10_BlumenwieseUpdate.crc2.fill();
        L10_BlumenwieseUpdate.crc2.save();
        L10_BlumenwieseUpdate.crc2.translate(posX, posY);
        for (let i = 80; i > 8; i -= 8) {
            L10_BlumenwieseUpdate.crc2.rotate(45 * Math.PI / 20);
            L10_BlumenwieseUpdate.crc2.beginPath();
            L10_BlumenwieseUpdate.crc2.moveTo(10, 20);
            L10_BlumenwieseUpdate.crc2.bezierCurveTo(-12, -25, 12, -25, 7, -10);
            L10_BlumenwieseUpdate.crc2.fillStyle = "RGB(232,211,10";
            L10_BlumenwieseUpdate.crc2.strokeStyle = "RGB(232,211,10";
            L10_BlumenwieseUpdate.crc2.fill();
            L10_BlumenwieseUpdate.crc2.stroke();
        }
        L10_BlumenwieseUpdate.crc2.restore();
        //color inside
        L10_BlumenwieseUpdate.crc2.save();
        L10_BlumenwieseUpdate.crc2.beginPath();
        moveTo(posX + 10, posY + 20);
        L10_BlumenwieseUpdate.crc2.arc(posX, posY, 5, 0, 2 * Math.PI);
        L10_BlumenwieseUpdate.crc2.fillStyle = "RGB(98,47,0";
        L10_BlumenwieseUpdate.crc2.strokeStyle = "RGB(98,47,0";
        L10_BlumenwieseUpdate.crc2.fill();
        L10_BlumenwieseUpdate.crc2.stroke();
        L10_BlumenwieseUpdate.crc2.restore();
    }
    //Bees
    function createBee() {
        for (let i = 0; i < 10; i++) {
            let bee = new L10_BlumenwieseUpdate.Bee(0.8);
            moveables.push(bee);
        }
    }
    //Clouds
    function createClouds() {
        let cloud = new L10_BlumenwieseUpdate.Cloud();
        moveables.push(cloud);
    }
    function update() {
        // console.log("Update");
        L10_BlumenwieseUpdate.crc2.fillRect(0, 0, L10_BlumenwieseUpdate.crc2.canvas.width, L10_BlumenwieseUpdate.crc2.canvas.height);
        L10_BlumenwieseUpdate.crc2.putImageData(L10_BlumenwieseUpdate.imageData, 0, 0);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
    }
})(L10_BlumenwieseUpdate || (L10_BlumenwieseUpdate = {}));
//# sourceMappingURL=BlumenwieseUpdate_Script.js.map