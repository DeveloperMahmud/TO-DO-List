import UI from './UI.js';
import Task from './task.js';

const ui = new UI();

ui.showAllTasks();

document.querySelector('.AddTaskBtn').addEventListener('click',(e) => {
    const taskTitle = document.querySelector('#newtaskID').value;
    // console.log(taskTitle);
    if(taskTitle.length > 0){
        const task = new Task(taskTitle);
        // console.log(task);
        ui.addToUI(task);
        ui.resetForm();   
    }
    
});

document.querySelector('.task-list').addEventListener('click', e => {

    if(e.target.className.includes('task__op_delete')){
        ui.deleteTask(e);
    };
    if(e.target.className.includes('task-check')){
        ui.completedTask(e);
    }
});