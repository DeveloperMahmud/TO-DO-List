function Task(title){
    this.id = new Date().toLocaleString();
    this.title = title;
    this.isCompleted = false;
};

export default Task;