namespace myCanvas {
    window.addEventListener("load", handleLoad);
    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");  //warum 2D?

        canvas.width = 600;  //canvas Breite = Breite der "Leinwand" 
        canvas.height = 600;  //canvas Höhe = Höhe der "Leinwand"

        let color: string[] = ["blue", "green", "magenta", "yellow", "orange"];

        //Dreiecke        
        for (let i: number = 0; i < color.length; i++)
            for (let x: number = 0; x < 100; x++) {
                let x: number = Math.floor(Math.random() * Math.floor(canvas.width));
                let y: number = Math.floor(Math.random() * Math.floor(canvas.height));
                let z: number = Math.floor(Math.random() * Math.floor(canvas.width));
                let a: number = Math.floor(Math.random() * Math.floor(canvas.height));
                let b: number = Math.floor(Math.random() * Math.floor(canvas.width));
                let c: number = Math.floor(Math.random() * Math.floor(canvas.height));
                crc2.beginPath();
                crc2.strokeStyle = color[i];
                crc2.moveTo(z, a);
                crc2.lineTo(x, y);
                crc2.lineTo(b, c);
                crc2.closePath();
                crc2.stroke();
                console.log(color[i]);

            }

        //Dicker Kreis in der Mitte 
        for (let t: number = 0; t < 2; t++) {
            for (let i: number = 0; i < color.length; i++) {
                let x: number = Math.floor(Math.random() * Math.floor(canvas.width));
                let y: number = Math.floor(Math.random() * Math.floor(canvas.height));
                crc2.beginPath();
                crc2.arc(x, y, 100, 0, 2 * Math.PI, false);
                crc2.fillStyle = color[i];
                crc2.fill();
                crc2.closePath();
                crc2.stroke();
            }
        }
    }
}