namespace L10_BlumenwieseUpdate {
    
    interface Vector {
        x: number;
        y: number;
    }

    //Thanks for the Help @Lisa

    export let imageData: ImageData;
    let moveables: Moveable [] = [];


    //HandleLoad
    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    export let golden: number = 0.62;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let horizon: number = crc2.canvas.height * golden;
        let posMountains: Vector = { x: 0, y: horizon };

        

        drawBackground();
        drawSun({ x: 100, y: 75 });
        
        drawMountains(posMountains, 75, 200, "grey", "white"); 
        drawMountains(posMountains, 50, 150, "grey", "lightgrey");
        drawTree({x: 280, y: 280});



        for (let i: number = 0; i < 10; i++) {
            drawFlowerRed();
            drawFlowerYellow();
        }
        drawHome();

        imageData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        
        createClouds();
        createBee();
        window.setInterval(update, 20);

    }


    //Background
    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "orange");
        gradient.addColorStop(1, "HSL(100, 70%, 20%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }


    //Sun
    function drawSun(_position: Vector): void {
        console.log("Sun", _position);

        let r1: number = 30;
        let r2: number = 140;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 150%, 50%, 1)");
        gradient.addColorStop(1, "HSLA(20, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    //Moutains
    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains", _position, _min, _max);
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.8, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

    //Tree
    function drawTree(_position: Vector): void {

        //evergreen tree
        crc2.save();
        crc2.beginPath();
        crc2.rect(_position.x, _position.y, 20, 100); 
        crc2.fillStyle = "RGB(94,47,0)";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(220, 300);
        crc2.lineTo(360, 300);
        crc2.lineTo(290, 200);
        crc2.closePath();
        crc2.fillStyle = "RGB(85,95,47)";
        crc2.fill();
        crc2.strokeStyle = "RGB(85,107,47)";

        crc2.stroke();

        crc2.moveTo(230, 240);
        crc2.lineTo(350, 240);
        crc2.lineTo(290, 130);
        crc2.closePath();
        crc2.fillStyle = "RGB(85,107,47)";
        crc2.fill();
        crc2.stroke();
        crc2.restore();
        crc2.closePath();

        //broadleaf tree
        crc2.save();
        crc2.beginPath();
        crc2.rect(_position.x + 200, _position.y - 20, 20, 120); 
        crc2.fillStyle = "RGB(94,47,0)";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(_position.x + 210, _position.y + 30);
        crc2.lineWidth = 10;
        crc2.fillStyle = "RGB(94,47,0)";
        crc2.fill();
        crc2.strokeStyle = "RGB(94,47,0)";
        crc2.stroke();
        crc2.closePath();

        crc2.fillStyle = "#487047";
        crc2.beginPath();
        crc2.arc(_position.x + 150, _position.y - 100, 45, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(_position.x + 200, _position.y - 50, 40, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(_position.x + 250, _position.y - 60, 40, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(_position.x + 220, _position.y - 150, 50, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(_position.x + 270, _position.y - 105, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(_position.x + 200, _position.y - 100, 50, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }
   
    //Bee Home
    function drawHome(): void {
        crc2.restore();
        //main house
        crc2.beginPath();
        crc2.arc(300, 400, 50, 0, 2 * Math.PI);
        crc2.fillStyle = "RGB(178,134,92)";
        crc2.fill();
        crc2.closePath();


        //stripes
        crc2.beginPath();
        crc2.moveTo(345, 420);
        crc2.lineTo(255, 420);
        crc2.moveTo(350, 400);
        crc2.lineTo(250, 400);
        crc2.moveTo(345, 380);
        crc2.lineTo(255, 380);
        crc2.moveTo(350, 360);
        crc2.strokeStyle = "black";
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.closePath();

        //entrance
        crc2.beginPath();
        crc2.arc(300, 420, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();

        //Ast
        crc2.beginPath();
        
        // crc2.moveTo(0, 300);
        crc2.fillStyle = "RGB(144,90,39)";
        crc2.fillRect(250, 440, 100, 20);
 
        crc2.closePath();
 
        crc2.save();
    }

    // red Flower
    function drawFlowerRed(): void {
        let horizon: number = crc2.canvas.height * golden;
        let posX: number = Math.floor(Math.random() * crc2.canvas.width);
        let posY: number = horizon + Math.floor(Math.random() * 250);

        //stalk
        crc2.beginPath();
        crc2.strokeStyle = "RGB(42,128,33)";
        crc2.fillStyle = "RGB(42,128,33)";
        crc2.fillRect(posX, posY, 4, 50); //PositionX, PositionY, stalk width, stalk height

        //leaf
        crc2.moveTo(posX, posY + 50);
        crc2.stroke();
        crc2.fill();
        crc2.save();

        //color leafs
        crc2.translate(posX, posY);
        for (let i: number = 0; i < 5; i++) {
            crc2.rotate(Math.PI * 2 / 5);
            crc2.beginPath();
            crc2.moveTo(10, 10);
            crc2.lineTo(-7, -10);
            crc2.bezierCurveTo(-12, -25, 12, -25, 7, -10);
            crc2.closePath();
            crc2.fillStyle = "RGB(161,37,37";
            crc2.fill();
        }
        crc2.restore();

        //color inside
        crc2.save();
        crc2.translate(posX, posY);
        crc2.beginPath();
        crc2.arc(0, 0, 7, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "RGB(242,209,29";
        crc2.fill();

        crc2.restore();
    }


    function drawFlowerYellow(): void {
        let horizon: number = crc2.canvas.height * golden;
        let posX: number = Math.floor(Math.random() * crc2.canvas.width);
        let posY: number = horizon + Math.floor(Math.random() * 250);

        //stalk
        crc2.beginPath();
        crc2.strokeStyle = "RGB(42,128,33)";
        crc2.fillStyle = "RGB(42,128,33)";
        crc2.fillRect(posX, posY, 4, 50);

        //color leaf
        crc2.moveTo(posX, posY + 50);
        crc2.stroke();
        crc2.fill();

        crc2.save();
        crc2.translate(posX, posY);
        for (let i: number = 80; i > 8; i -= 8) {
            crc2.rotate(45 * Math.PI / 20);
            crc2.beginPath();
            crc2.moveTo(10, 20);
            crc2.bezierCurveTo(-12, -25, 12, -25, 7, -10);
            crc2.fillStyle = "RGB(232,211,10";
            crc2.strokeStyle = "RGB(232,211,10";
            crc2.fill();

            crc2.stroke();

        }
        crc2.restore();

        //color inside
        crc2.save();
        crc2.beginPath();
        moveTo(posX + 10, posY + 20);
        crc2.arc(posX, posY, 5, 0, 2 * Math.PI);
        crc2.fillStyle = "RGB(98,47,0";
        crc2.strokeStyle = "RGB(98,47,0";
        crc2.fill();
        crc2.stroke();
        crc2.restore();
    }


      //Bees
    function createBee(): void {
        for (let i: number = 0; i < 10; i++) {
            let bee: Bee = new Bee(0.8);
            moveables.push(bee);    
        }
    }

    //Clouds
    function createClouds(): void {
        let cloud: Cloud = new Cloud(); 
        moveables.push(cloud);                 
    }

    function update(): void {
        // console.log("Update");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imageData, 0, 0);

        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
    }


}