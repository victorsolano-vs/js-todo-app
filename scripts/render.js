export const myTasks = ['watch football', 'wash dishes'];



// render html list of tasks to be done
export function renderTasks() {
    let taskCardsHTML = ''

    
    myTasks.forEach((task) => {
        taskCardsHTML += `
            <div class="taskCard">
                <div class="textContainer">
                <p class="cardTitle">${task}</p>
                </div>
                
    
                <div class="cardBtns">
                    <button class="cardBtn cardDoneBtn">Done</button>
                    <button class="cardBtn cardEditBtn">Edit</button>
                    <button class="cardBtn cardDeleteBtn">Delete</button>      
                </div>

            </div>
        `
    })
    
    if(taskCardsHTML === ''){
        taskCardsHTML = `
        <p class = "emptyTaskList">There have been no new tasks added.</p>
        `
    }
    
    
    document.querySelector('.tasksContainer').innerHTML = taskCardsHTML


    // function to delete task from list
    const deleteTaskBtn = document.querySelectorAll('.cardDeleteBtn')
    console.log(deleteTaskBtn)




    deleteTaskBtn.forEach((deleteTask, index) => {
        deleteTask.addEventListener('click', () => {
            deleteTaskFunc(index)
        })
    })
}



function deleteTaskFunc(index) {
    myTasks.splice(index, 1)
    renderTasks()
}

