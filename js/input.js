
const form = document.querySelector('.main--input__input')
const input = document.querySelector('.main--input__input__input')
const inputTitle = document.querySelector('.main--input__title')
const sayhello = document.querySelector('.main-sayhello')
const footer = document.querySelector('.footer-thisis')
const todo = document.querySelector('.main-todolist')
const todoForm = document.querySelector('.main-todo-input')


form.addEventListener ('submit', handleInput)


function handleInput (event) {
    event.preventDefault()
    const inputs = input.value
    form.classList.add("hidden");
    inputTitle.classList.add("hidden")
    sayhello.classList.remove("hidden")
    todo.classList.remove("hidden")
    todoForm.classList.remove("hidden")
    localStorage.setItem('username', inputs)
    handleInputTitle(input.value)
    input.value = "";

}

function handleInputTitle (username) {
    console.log(username)
    sayhello.innerText = `Hello ${username}`
    footer.innerText = `This is ${username}'s world`
}

const a = localStorage.getItem('username')

defaultFunction()


function defaultFunction () {
    const savedName = localStorage.getItem('username')
    if (savedName === null) {
        //nothing
    }
    else {
        form.classList.add("hidden");
        inputTitle.classList.add("hidden")
        sayhello.classList.remove("hidden")
        todo.classList.remove("hidden")
        todoForm.classList.remove("hidden")
        sayhello.innerText = `Hello ${savedName}`
        footer.innerText = `This is ${savedName}'s world`
    }
}