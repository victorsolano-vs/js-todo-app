import { myTasks } from "./render.js";


export const myCompletedTasks = myTasks.filter((task, index) => {
    return task.taskStatus === 'complete'
})

export function renderCompletedTasks() {
    let taskCardsHTML = ''

    
    myCompletedTasks.forEach((task) => {
        taskCardsHTML += `
            <div class="taskCard">
                <div class="textContainer">
                    <p class="cardTitle">${task.task}</p>
                    <p class = "cardStatus">${task.taskStatus}</p>
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
}

document.querySelector('.completedTasksBtn').addEventListener('click', () => {
    renderCompletedTasks()
})