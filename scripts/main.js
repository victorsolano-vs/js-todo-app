const test = document.querySelector('.testTitle')

console.log(test)


const testBtn = document.querySelectorAll('.testBtn')

testBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        console.log(btn)
        test.classList.add('testColor')
    })
})

// testBtn.addEventListener('click', () => {
    
// })