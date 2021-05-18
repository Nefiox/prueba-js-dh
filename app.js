const fs = require('fs');
/*
    FORMATO DE CADA TAREA
        - titulo: string
        - status: string (
           * terminada
           * pendiente
         )
*/
const leerTareas = function () {
    const list = fs.readFileSync("./tareas.json");
    return JSON.parse(list);
}

const agregarTarea = function (task) {
    const tasks = leerTareas();
    tasks.push(task);
    const conv = JSON.stringify(tasks);
    fs.writeFileSync("./tareas.json", conv);
}

const filtrarTareasPorEstado = function (edo) {
    return leerTareas().filter(({ status }) => status === edo);
}

module.exports = {
    leerTareas, agregarTarea, filtrarTareasPorEstado
}