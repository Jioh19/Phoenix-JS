function esCovid(array1, array2) {
    let contador = 0;
    for(let i = 0; i < array1.length; i++) {
        for(let j = 0; j < array2.length; j++) {
            if(array1[i] === array2[j]) {
                contador++;
                continue;
            }
            if(contador === 2) {
                return true;
            }
        }
    }
    return false;
}

const sintoPacEnfermo = ["fiebre", "dolor muscular", "vomitos"];
const sintoPacNoEnfermo = ["fiebre", "titila ojo", "vomitos"];
const sintoCovid = ["fiebre", "dolor muscular", "perdida gusto"];

console.log(esCovid(sintoPacEnfermo, sintoCovid));
console.log(esCovid(sintoPacNoEnfermo, sintoCovid));
