export const myTasks = ['watch football', 'wash dishes'];
const myNewTasks = [{
    task: 'watch football',
    taskStatus: 'incomplete'
},
{
    task: 'wash dishes',
    taskStatus: 'complete'
}]

// global index for task edit
// let taskIndex;


// get modal
const modalDiv = document.getElementById('modal')

// get modal close btn
const modalCloseBtn = document.getElementById('closeBtn')

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
    deleteTaskBtn.forEach((deleteTask, index) => {
        deleteTask.addEventListener('click', () => {
            deleteTaskFunc(index)
        })
    })

    // function to delete task from list
    const editTaskBtn = document.querySelectorAll('.cardEditBtn')
    editTaskBtn.forEach((editTask, index) => {
        editTask.addEventListener('click', () => {
            openModal(index)
            saveNewTask(index)
        })
    })
}


function openModal(index) {
    const currentTaskText = document.querySelector('.currentTask')
    currentTaskText.innerHTML = `Current Task: ${myTasks[index]}`
    modalDiv.style.display = 'block'

    document.querySelector('.overlay').style.display = 'block'
}

function closeModal() {
    modalDiv.style.display = ''

    document.querySelector('.editTaskInput').value = ''
    document.querySelector('.overlay').style.display = ''

}
modalCloseBtn.addEventListener('click', closeModal)

function saveNewTask(index) {
    const savebtn = document.querySelector('.saveNewTaskBtn')

    savebtn.addEventListener('click', () =>{
        let newTask = document.querySelector('.editTaskInput').value

        if((newTask === '') || newTask.toLowerCase() === myTasks[index].toLowerCase()){
            alert('The new task is either empty or the same task was repeated.')
        } else {
            myTasks[index] = newTask
            renderTasks()
            closeModal()
        }

        
        
    })
    
}

function deleteTaskFunc(index) {
    myTasks.splice(index, 1)
    renderTasks()
}


