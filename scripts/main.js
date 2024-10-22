import { renderTasks, myTasks, myIncompleteTasks } from "./render.js";
import { myCompletedTasks, renderCompletedTasks } from "./completedTasks.js";

console.log(myCompletedTasks)
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


document.querySelector('.completedTasksBtn').addEventListener('click', () => {
    renderCompletedTasks()
})
document.querySelector('.myTasksBtn').addEventListener('click', () => {
    renderTasks()
})


