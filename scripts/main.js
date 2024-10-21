import { renderTasks, myTasks } from "./render.js";

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
        myTasks.push(inputValue)

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

// function to delete task from list
const deleteTaskBtn = document.querySelectorAll('.cardDeleteBtn')


deleteTaskBtn.forEach((deleteTask) => {
    deleteTask.addEventListener('click', () => {
        console.log('delete')
    })
})




