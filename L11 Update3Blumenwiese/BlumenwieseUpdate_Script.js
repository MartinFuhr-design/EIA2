"use strict";
var L11_BlumenwieseUpdate;
(function (L11_BlumenwieseUpdate) {
    let moveables = [];
    let flowers = [];
    //HandleLoad
    window.addEventListener("load", handleLoad);
    L11_BlumenwieseUpdate.golden = 0.62;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L11_BlumenwieseUpdate.crc2 = canvas.getContext("2d");
        let horizon = L11_BlumenwieseUpdate.crc2.canvas.height * L11_BlumenwieseUpdate.golden;
        let posMountains = { x: 0, y: horizon };
        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawMountains(posMountains, 75, 200, "grey", "white");
        drawMountains(posMountains, 50, 150, "grey", "lightgrey");
        drawTree({ x: 280, y: 280 });
        drawHome();
        L11_BlumenwieseUpdate.imageData = L11_BlumenwieseUpdate.crc2.getImageData(0, 0, L11_BlumenwieseUpdate.crc2.canvas.width, L11_BlumenwieseUpdate.crc2.canvas.height);
        createClouds();
        createBee();
        createFlowers();
        window.setInterval(update, 20);
    }
    //Background
    function drawBackground() {
        console.log("Background");
        let gradient = L11_BlumenwieseUpdate.crc2.createLinearGradient(0, 0, 0, L11_BlumenwieseUpdate.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(L11_BlumenwieseUpdate.golden, "orange");
        gradient.addColorStop(1, "HSL(100, 70%, 20%)");
        L11_BlumenwieseUpdate.crc2.fillStyle = gradient;
        L11_BlumenwieseUpdate.crc2.fillRect(0, 0, L11_BlumenwieseUpdate.crc2.canvas.width, L11_BlumenwieseUpdate.crc2.canvas.height);
    }
    //Sun
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 140;
        let gradient = L11_BlumenwieseUpdate.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 150%, 50%, 1)");
        gradient.addColorStop(1, "HSLA(20, 100%, 50%, 0)");
        L11_BlumenwieseUpdate.crc2.save();
        L11_BlumenwieseUpdate.crc2.translate(_position.x, _position.y);
        L11_BlumenwieseUpdate.crc2.fillStyle = gradient;
        L11_BlumenwieseUpdate.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L11_BlumenwieseUpdate.crc2.fill();
        L11_BlumenwieseUpdate.crc2.restore();
    }
    //Moutains
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        L11_BlumenwieseUpdate.crc2.save();
        L11_BlumenwieseUpdate.crc2.translate(_position.x, _position.y);
        L11_BlumenwieseUpdate.crc2.beginPath();
        L11_BlumenwieseUpdate.crc2.moveTo(0, 0);
        L11_BlumenwieseUpdate.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L11_BlumenwieseUpdate.crc2.lineTo(x, y);
        } while (x < L11_BlumenwieseUpdate.crc2.canvas.width);
        L11_BlumenwieseUpdate.crc2.lineTo(x, 0);
        L11_BlumenwieseUpdate.crc2.closePath();
        let gradient = L11_BlumenwieseUpdate.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.8, _colorHigh);
        L11_BlumenwieseUpdate.crc2.fillStyle = gradient;
        L11_BlumenwieseUpdate.crc2.fill();
        L11_BlumenwieseUpdate.crc2.restore();
    }
    //Tree
    function drawTree(_position) {
        //evergreen tree
        L11_BlumenwieseUpdate.crc2.save();
        L11_BlumenwieseUpdate.crc2.beginPath();
        L11_BlumenwieseUpdate.crc2.rect(_position.x, _position.y, 20, 100);
        L11_BlumenwieseUpdate.crc2.fillStyle = "RGB(94,47,0)";
        L11_BlumenwieseUpdate.crc2.fill();
        L11_BlumenwieseUpdate.crc2.closePath();
        L11_BlumenwieseUpdate.crc2.beginPath();
        L11_BlumenwieseUpdate.crc2.moveTo(220, 300);
        L11_BlumenwieseUpdate.crc2.lineTo(360, 300);
        L11_BlumenwieseUpdate.crc2.lineTo(290, 200);
        L11_BlumenwieseUpdate.crc2.closePath();
        L11_BlumenwieseUpdate.crc2.fillStyle = "RGB(85,95,47)";
        L11_BlumenwieseUpdate.crc2.fill();
        L11_BlumenwieseUpdate.crc2.strokeStyle = "RGB(85,107,47)";
        L11_BlumenwieseUpdate.crc2.stroke();
        L11_BlumenwieseUpdate.crc2.moveTo(230, 240);
        L11_BlumenwieseUpdate.crc2.lineTo(350, 240);
        L11_BlumenwieseUpdate.crc2.lineTo(290, 130);
        L11_BlumenwieseUpdate.crc2.closePath();
        L11_BlumenwieseUpdate.crc2.fillStyle = "RGB(85,107,47)";
        L11_BlumenwieseUpdate.crc2.fill();
        L11_BlumenwieseUpdate.crc2.stroke();
        L11_BlumenwieseUpdate.crc2.restore();
        L11_BlumenwieseUpdate.crc2.closePath();
        //broadleaf tree
        L11_BlumenwieseUpdate.crc2.save();
        L11_BlumenwieseUpdate.crc2.beginPath();
        L11_BlumenwieseUpdate.crc2.rect(_position.x + 200, _position.y - 20, 20, 120);
        L11_BlumenwieseUpdate.crc2.fillStyle = "RGB(94,47,0)";
        L11_BlumenwieseUpdate.crc2.fill();
        L11_BlumenwieseUpdate.crc2.closePath();
        L11_BlumenwieseUpdate.crc2.beginPath();
        L11_BlumenwieseUpdate.crc2.moveTo(_position.x + 210, _position.y + 30);
        L11_BlumenwieseUpdate.crc2.lineWidth = 10;
        L11_BlumenwieseUpdate.crc2.fillStyle = "RGB(94,47,0)";
        L11_BlumenwieseUpdate.crc2.fill();
        L11_BlumenwieseUpdate.crc2.strokeStyle = "RGB(94,47,0)";
        L11_BlumenwieseUpdate.crc2.stroke();
        L11_BlumenwieseUpdate.crc2.closePath();
        L11_BlumenwieseUpdate.crc2.fillStyle = "#487047";
        L11_BlumenwieseUpdate.crc2.beginPath();
        L11_BlumenwieseUpdate.crc2.arc(_position.x + 150, _position.y - 100, 45, 0, 2 * Math.PI);
        L11_BlumenwieseUpdate.crc2.fill();
        L11_BlumenwieseUpdate.crc2.closePath();
        L11_BlumenwieseUpdate.crc2.beginPath();
        L11_BlumenwieseUpdate.crc2.arc(_position.x + 200, _position.y - 50, 40, 0, 2 * Math.PI);
        L11_BlumenwieseUpdate.crc2.fill();
        L11_BlumenwieseUpdate.crc2.closePath();
        L11_BlumenwieseUpdate.crc2.beginPath();
        L11_BlumenwieseUpdate.crc2.arc(_position.x + 250, _position.y - 60, 40, 0, 2 * Math.PI);
        L11_BlumenwieseUpdate.crc2.fill();
        L11_BlumenwieseUpdate.crc2.closePath();
        L11_BlumenwieseUpdate.crc2.beginPath();
        L11_BlumenwieseUpdate.crc2.arc(_position.x + 220, _position.y - 150, 50, 0, 2 * Math.PI);
        L11_BlumenwieseUpdate.crc2.fill();
        L11_BlumenwieseUpdate.crc2.closePath();
        L11_BlumenwieseUpdate.crc2.beginPath();
        L11_BlumenwieseUpdate.crc2.arc(_position.x + 270, _position.y - 105, 30, 0, 2 * Math.PI);
        L11_BlumenwieseUpdate.crc2.fill();
        L11_BlumenwieseUpdate.crc2.closePath();
        L11_BlumenwieseUpdate.crc2.beginPath();
        L11_BlumenwieseUpdate.crc2.arc(_position.x + 200, _position.y - 100, 50, 0, 2 * Math.PI);
        L11_BlumenwieseUpdate.crc2.fill();
        L11_BlumenwieseUpdate.crc2.closePath();
    }
    //Bee Home
    function drawHome() {
        L11_BlumenwieseUpdate.crc2.restore();
        //main house
        L11_BlumenwieseUpdate.crc2.beginPath();
        L11_BlumenwieseUpdate.crc2.arc(300, 400, 50, 0, 2 * Math.PI);
        L11_BlumenwieseUpdate.crc2.fillStyle = "RGB(178,134,92)";
        L11_BlumenwieseUpdate.crc2.fill();
        L11_BlumenwieseUpdate.crc2.closePath();
        //stripes
        L11_BlumenwieseUpdate.crc2.beginPath();
        L11_BlumenwieseUpdate.crc2.moveTo(345, 420);
        L11_BlumenwieseUpdate.crc2.lineTo(255, 420);
        L11_BlumenwieseUpdate.crc2.moveTo(350, 400);
        L11_BlumenwieseUpdate.crc2.lineTo(250, 400);
        L11_BlumenwieseUpdate.crc2.moveTo(345, 380);
        L11_BlumenwieseUpdate.crc2.lineTo(255, 380);
        L11_BlumenwieseUpdate.crc2.moveTo(350, 360);
        L11_BlumenwieseUpdate.crc2.strokeStyle = "black";
        L11_BlumenwieseUpdate.crc2.lineWidth = 2;
        L11_BlumenwieseUpdate.crc2.stroke();
        L11_BlumenwieseUpdate.crc2.closePath();
        //entrance
        L11_BlumenwieseUpdate.crc2.beginPath();
        L11_BlumenwieseUpdate.crc2.arc(300, 420, 10, 0, 2 * Math.PI);
        L11_BlumenwieseUpdate.crc2.fillStyle = "black";
        L11_BlumenwieseUpdate.crc2.fill();
        L11_BlumenwieseUpdate.crc2.closePath();
        //Ast
        L11_BlumenwieseUpdate.crc2.beginPath();
        // crc2.moveTo(0, 300);
        L11_BlumenwieseUpdate.crc2.fillStyle = "RGB(144,90,39)";
        L11_BlumenwieseUpdate.crc2.fillRect(250, 440, 100, 20);
        L11_BlumenwieseUpdate.crc2.closePath();
        L11_BlumenwieseUpdate.crc2.save();
    }
    //Bees
    function createBee() {
        for (let i = 0; i < 10; i++) {
            let bee = new L11_BlumenwieseUpdate.Bee(0.8);
            moveables.push(bee);
        }
    }
    //Clouds
    function createClouds() {
        let cloud = new L11_BlumenwieseUpdate.Cloud();
        moveables.push(cloud);
    }
    function createFlowers() {
        for (let i = 0; i < 10; i++) {
            let flowerRed = new L11_BlumenwieseUpdate.FlowerRed();
            flowers.push(flowerRed);
        }
        for (let i = 0; i < 10; i++) {
            let flowerYellow = new L11_BlumenwieseUpdate.FlowerYellow();
            flowers.push(flowerYellow);
        }
    }
    function update() {
        // console.log("Update");
        L11_BlumenwieseUpdate.crc2.fillRect(0, 0, L11_BlumenwieseUpdate.crc2.canvas.width, L11_BlumenwieseUpdate.crc2.canvas.height);
        L11_BlumenwieseUpdate.crc2.putImageData(L11_BlumenwieseUpdate.imageData, 0, 0);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        for (let flower of flowers) {
            flower.draw();
            flower.fill(0.1);
        }
    }
})(L11_BlumenwieseUpdate || (L11_BlumenwieseUpdate = {}));
//# sourceMappingURL=BlumenwieseUpdate_Script.js.map