import UI from './UI.js';
import Task from './task.js';

const ui = new UI();


document.querySelector('.AddTaskBtn').addEventListener('click',(e) => {
    const taskTitle = document.querySelector('#newtaskID').value;
    console.log(taskTitle);
    const task = new Task(taskTitle);
    console.log(task);
    ui.addToUI(task);
    ui.resetForm();
});