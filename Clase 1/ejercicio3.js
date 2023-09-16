const esInvierno = (mes) => {
    switch (mes) {
        case "junio":
        case "julio":
        case "agosto":
            return true;
        default:
            return false;
    }
}

console.log("Junio", esInvierno("junio"));
console.log("Enero", esInvierno("enero"));