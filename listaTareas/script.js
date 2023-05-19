// References
const dateTasks = document.getElementById("date");
const listTasks = document.getElementById("list");
const inputTasks = document.getElementById("input");
const buttonEnterTasks = document.getElementById("enter");
const check = "fa-check-circle";
const uncheck = "fa-circle";
const lineThrough = "line-through";
let id;
let LIST;

//  dateTasks
const DATE = new Date;
// Agregamos al dom el formato de fecha, incluyendo zona horaria de mexico, nombre abreviado del mes y dia
dateTasks.innerHTML = DATE.toLocaleString("es-MX", {weekday:"long",month:"long",day:"numeric"})

// Function addTasks
function addTask(task, id, done, deleted) {

    if(deleted) {return};

    const DONE = done ? check : uncheck;
    const LINE = done? lineThrough : "";
    const element = 
    `<li>

    <i class="far ${DONE}" data="done" id="${id}"></i>
    <p class="text ${LINE}">${task}</p>
    <i class="fas fa-trash de" data="deleted" id="${id}"></i>

    </li> `

    listTasks.insertAdjacentHTML("beforeend",element);
}

// Funcion taskDone()
function taskDone(element) {
    element.classList.toggle(check);
    element.classList.toggle(uncheck);
    // Accedemos al elemento padre  y busca alguna cla que coincidad con .text, y le hacemos un toggle con el subrayado
    element.parentNode.querySelector(".text").classList.toggle(lineThrough)
    LIST[element.id].done = LIST[element.id].done ?false :true //Si
}

// Function taskDeleted()
function taskDeleted(element) {
    // Nos situamos en el padre de las listas
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].deleted = true
}

// Cuando le damos click al boton morado
buttonEnterTasks.addEventListener("click", (e) => {
    e.preventDefault();
    const task = inputTasks.value;
    if(task) {
        // Llamamos a la funcion addTask y le agregamos la tarea introducida en el input
        addTask(task, id, false, false);
        LIST.push({
            name: task,
            id: id,
            done: false,
            deleted: false,
        })
    }
    localStorage.setItem("ALL",JSON.stringify(LIST))
    input.value = "";
    id++;
    
})

// Cuando presione la tecla "Enter" en el documento
document.addEventListener("keyup", function(event) { 
    if(event.key == "Enter") {
        const task = inputTasks.value;
        if(task) {
            // Llamamos a la funcion addTask y le agregamos la tarea introducida en el input
            addTask(task);
            LIST.push({
                name: task,
                id: id,
                realizado: false,
                deleted: false,
            })
        }
        localStorage.setItem("ALL",JSON.stringify(LIST))
        inputTasks.value = "";
        id++;
        
    }
})

listTasks.addEventListener("click", function(event) {
    const element = event.target;
    const elementData = element.attributes.data.value;
    if(elementData === "done") {
        taskDone(element);
    }
    else if(elementData === "deleted") {
        taskDeleted(element);
    }
    localStorage.setItem("ALL",JSON.stringify(LIST))
});

// localstorage get item
let data = localStorage.getItem("ALL");
if(data) {
    LIST = JSON.parse(data);
    id = LIST.lenght;
    loadList(LIST);
} else {
    LIST = [];
    id = 0;
}

function loadList(DATA) {
    DATA.forEach((value) => {
        addTask(value.name,value.id, value.done, value.deleted);
    })
}