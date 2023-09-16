const horarioCursada = (materia) => {
    const materias = [
        {
            nombre: "Matemática",
            dia: "Jueves",
        },
        {
            nombre: "Geografía",
            dia: "Viernes",
        },
        {
            nombre: "Lengua",
            dia: "Lunes",
        },
    ];
    for(let i = 0; i < materias.length; i++) {
        if(materia === materias[i].nombre) {
            return materias[i].dia;
        }
    }
    return "Materia no encontrada";
}

console.log(horarioCursada("Matemática"));
console.log(horarioCursada("Programacion"));