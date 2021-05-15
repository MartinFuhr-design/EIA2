namespace L08_Canvas_Alley {
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.62;

    //HandleLoad 
    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let horizon: number = crc2.canvas.height * golden;
        let treesOffsetBack: number = 15;
        let treesOffsetFront: number = 100;

        let posMountains: Vector = { x: 0, y: horizon };
        let posStreet: Vector = { x: crc2.canvas.width / 2, y: horizon };
        let posTreesStart: Vector = { x: posStreet.x -  2 - treesOffsetBack, y: horizon };
        let posTreesEnd: Vector = { x: crc2.canvas.width  / 2 - treesOffsetFront, y: crc2.canvas.height };

        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        drawMountains(posMountains, 75, 200, "grey", "white");
        drawMountains(posMountains, 50, 150, "grey", "lightgrey");
        drawTree({x: 280, y: 280});
        drawflower1({x: 0, y: 400});
        drawflower2({x: 0, y: 450});
        posTreesStart.x = posStreet.x +  2 + treesOffsetBack;
        posTreesEnd.x = posTreesEnd.x + 2 * treesOffsetFront;
    }

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

    //Cloud
    function drawCloud(_position: Vector, _size: Vector): void {
        console.log("Cloud", _position, _size);

        let nParticles: number = 20;
        let radiusParticle: number = 50;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
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

    //yellow flower
    function drawflower1(_position: Vector): void {
        for (let i: number = 0; i < 5; i++) {

        let randomX: number = 1000 * Math.random();
        
        //stalk
        crc2.beginPath();
        crc2.rect(_position.x + randomX, _position.y, 4, 60); 
        crc2.fillStyle = "RGB(42,128,33";
        crc2.fill();
        crc2.closePath();

        //color leafs
        crc2.fillStyle = "RGB(232,211,10";
        crc2.beginPath();
        crc2.ellipse(_position.x + randomX, _position.y + 10, 5, 10, 0, 20, 40);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.ellipse(_position.x + randomX + 10, _position.y + 5, 5, 10, 2, 20, 40);
        crc2.fill();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.ellipse(_position.x + randomX + 10, _position.y - 8, 5, 10, 1, 20, 40);
        crc2.fill();
        crc2.closePath();
      
        crc2.beginPath();
        crc2.ellipse(_position.x + randomX - 11, _position.y - 5, 5, 10, 5, 20, 40);
        crc2.fill();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.ellipse(_position.x + randomX - 10, _position.y + 6, 5, 10, 7, 20, 40);
        crc2.fill();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.ellipse(_position.x - 2 + randomX, _position.y - 11, 5, 10, 0, 20, 40);
        crc2.fill();
        crc2.closePath();

         //color inside
        crc2.beginPath();
        crc2.arc(_position.x + randomX, _position.y, 9, 0, 2 * Math.PI);
        crc2.fillStyle = "RGB(98,47,0";
        crc2.fill();
        crc2.closePath();
        }

    }
    //red flower 
    function drawflower2(_position: Vector): void {
        for (let i: number = 0; i < 5; i++) {

        let randomX: number = 1000 * Math.random();

        //stalk
        crc2.beginPath();
        crc2.rect(_position.x + randomX, _position.y, 4, 35); 
        crc2.fillStyle = "RGB(42,128,33";
        crc2.fill();
        crc2.closePath();

        //color leafs
        crc2.fillStyle = "RGB(161,37,37";
        crc2.beginPath();
        crc2.ellipse(_position.x + randomX, _position.y + 10, 5, 10, 0, 20, 40);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.ellipse(_position.x + randomX + 10, _position.y + 5, 5, 10, 2, 20, 40);
        crc2.fill();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.ellipse(_position.x + randomX + 10, _position.y - 8, 5, 10, 1, 20, 40);
        crc2.fill();
        crc2.closePath();
      
        crc2.beginPath();
        crc2.ellipse(_position.x + randomX - 11, _position.y - 5, 5, 10, 5, 20, 40);
        crc2.fill();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.ellipse(_position.x + randomX - 10, _position.y + 6, 5, 10, 7, 20, 40);
        crc2.fill();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.ellipse(_position.x - 2 + randomX, _position.y - 11, 5, 10, 0, 20, 40);
        crc2.fill();
        crc2.closePath();

        //color inside
        crc2.beginPath();
        crc2.arc(_position.x + randomX, _position.y, 9, 0, 2 * Math.PI);
        crc2.fillStyle = "RGB(242,209,29";
        crc2.fill();
        crc2.closePath();
        }

    }

    
}