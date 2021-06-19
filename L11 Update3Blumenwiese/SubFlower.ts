namespace L11_BlumenwieseUpdate {
    export abstract class SubFlower {
        protected position: Vector;
        protected velocity: Vector;

        constructor(_position?: Vector) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
        }


        public fill(_timeslice: number): void {
            // console.log("fill"); 
        }

        public draw(): void {
            // console.log("draw");
        }

    }
}