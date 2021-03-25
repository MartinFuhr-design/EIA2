namespace randomPoem {

    let subjektiv: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let praedikat: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objektiv: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    

    for (let i: number = subjektiv.length ; i > 0; i--) {
       let phrase: string = getVerse(subjektiv, praedikat, objektiv);
       console.log(phrase);
    }
   

    function getVerse(_subjektiv: string[], _praedikat: string[], _objektiv: string[]): string {
        let verseContainer: string = "";
        let randomSubjektiv: number = Math.floor(Math.random() * _subjektiv.length);
        let randomPraedikat: number = Math.floor(Math.random() * _praedikat.length);
        let randomObjektiv: number = Math.floor(Math.random() * _objektiv.length);

        verseContainer = _subjektiv.splice(randomSubjektiv, 1)[0] + " " + _praedikat.splice(randomPraedikat, 1)[0] + " " + _objektiv.splice(randomObjektiv, 1)[0];
        return verseContainer;
    }


}



