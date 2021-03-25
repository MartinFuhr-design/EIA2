"use strict";
var Zufallsgedicht;
(function (Zufallsgedicht) {
    let subjekteArray = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let praedikateArray = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekteArray = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    for (let i = 6; i > 0; i--) {
        let phrase = getVerse(subjekteArray, praedikateArray, objekteArray);
        console.log(phrase);
    }
    function getVerse(subjekteArray, praedikateArray, objekteArray) {
        let versContainer = "";
        let randomSubjekt = Math.floor(Math.random() * subjekteArray.length);
        let randompraedikat = Math.floor(Math.random() * praedikateArray.length);
        let randomobjekt = Math.floor(Math.random() * objekteArray.length);
        versContainer = subjekteArray.slice(randomSubjekt, 1)[0] + " " + praedikateArray.slice(randompraedikat, 1)[0] + " " + objekteArray.slice(randomobjekt, 1)[0];
        return versContainer;
    }
})(Zufallsgedicht || (Zufallsgedicht = {}));
//# sourceMappingURL=RandomPoem_script.js.map