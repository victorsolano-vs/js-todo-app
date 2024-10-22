export const myTasks = ['watch football', 'wash dishes'];

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
            openModal()
            saveNewTask(index)
        })
    })
}


function openModal() {
    modalDiv.style.display = 'block'
}

function closeModal() {
    modalDiv.style.display = ''
}
modalCloseBtn.addEventListener('click', closeModal)

function saveNewTask(index) {
    const savebtn = document.querySelector('.saveNewTaskBtn')

    savebtn.addEventListener('click', () =>{
        let newTask = document.querySelector('.editTaskInput').value
        myTasks[index] = newTask

        renderTasks()
        closeModal()
    })
    
}



