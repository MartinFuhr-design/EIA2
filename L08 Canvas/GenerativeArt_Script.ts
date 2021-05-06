namespace myCanvas {
    window.addEventListener("load", handleLoad);
    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");  

        canvas.width = 600;  //canvas Hight
        canvas.height = 600;  //canvas Width 

        let color: string[] = ["#2f2c29"];

        //Center Circle 
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