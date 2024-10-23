import { renderTasks, myTasks, myIncompleteTasks, renderCompletedTasks } from "./render.js";

let activeBtn = document.querySelector('.myTasksBtn')
activeBtn.classList.add('active')


// render html cards
renderTasks()

function addInput() {
    // get input value from input tag
    const inputValue = document.querySelector('.taskInput').value
   
    if(inputValue === ''){
        alert('Please enter a task.')
        return
    } else {
        // add value to array
        myTasks.push({
            task: inputValue,
            taskStatus: 'incomplete'
        })

        // reset the input
        document.querySelector('.taskInput').value = ''

        // re-render tasks html
        renderTasks()
    }
}

// event listener to press enter to submit task
const inputKeySubmit = document.querySelector('.taskInput')
inputKeySubmit.addEventListener('keydown', (event) =>{ 
    if(event.key === 'Enter'){
        event.preventDefault()
        addInput()
    }
})

// event listener to add functionality to add btn
const addTaskBtn = document.querySelector('.addTaskBtn')
addTaskBtn.addEventListener('click', () => {
    addInput()
    console.log(myTasks)
})



const myCompletedTasksBtn = document.querySelector('.completedTasksBtn')

myCompletedTasksBtn.addEventListener('click', () => {
    renderCompletedTasks()
    toggleActiveBtn(myCompletedTasksBtn)
})

const myCurrentTasksBtn = document.querySelector('.myTasksBtn')
myCurrentTasksBtn.addEventListener('click', () => {
    renderTasks()
    toggleActiveBtn(myCurrentTasksBtn)
})

function toggleActiveBtn(buttonClicked) {
    myCompletedTasksBtn.classList.remove('active')
    myCurrentTasksBtn.classList.remove('active')

    buttonClicked.classList.add('active')
}