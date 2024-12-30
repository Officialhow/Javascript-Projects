let toDoList = []

// Add Task Endpoint
function addTask() {
    let newTask = prompt("Add new task")
    if (!newTask || newTask.trim()===""){
        alert ("Task cannot be empty")
        return;
    }
    toDoList.push(newTask.trim())
    return toDoList
}

// Remove Task Endpoint
function removeTask() {
   let itemNo = parseInt(prompt("Indicate the position of the task to be deleted"))
   if (isNaN(itemNo) || itemNo<= 0 || itemNo > toDoList.length) {
    alert ("Please indicate a valid task position")
    return;
   }
    toDoList.splice(itemNo - 1,1)
    return toDoList
}

//View Task
function viewTask() {
    if (toDoList.length===0){
        alert("No task available")
    } else {
        toDoList.forEach((task, index) => {
            alert(`${index + 1}. ${task}`)
        });
    }
}