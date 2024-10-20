const test = document.querySelector('.appTitle')

console.log(test)

const myTasks = ['watch football', 'wash dishes'];

console.log(myTasks)

// setTimeout(() => {
//     const inputValue = document.querySelector('.taskInput')
//     myTasks.push(inputValue.value)
//     console.log(inputValue.value)
//     console.log(myTasks)
// }, 10000)

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

const addTaskBtn = document.querySelector('.addTaskBtn')
addTaskBtn.addEventListener('click', () => {
    
    addInput()
    console.log(myTasks)
    
})


function renderTasks() {
    let taskCardsHTML = ''

    myTasks.forEach((task) => {
        taskCardsHTML += `
        
        <h1>${task}</h1>
        `
    })
    console.log(taskCardsHTML)

    document.querySelector('.tasksContainer').innerHTML = taskCardsHTML
}

//renderTasks()