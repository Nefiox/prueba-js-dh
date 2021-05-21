/*
    FORMATO DE CADA TAREA
        - titulo: string
        - status: string (
           * terminada
           * pendiente
         )
*/
const fs = require('fs');
const taskList = './tareas.json';

exports.leerTareas = function () {
    return JSON.parse(fs.readFileSync(taskList, 'utf-8'));
}

exports.agregarTarea = function (tarea) {
    const listaTareas = exports.leerTareas();
    listaTareas.push(tarea);
    return fs.writeFileSync(taskList, JSON.stringify(listaTareas));
}

exports.filtrarTareasPorEstado = function (estado) {
   return exports.leerTareas().filter(({status}) => status === estado);
}