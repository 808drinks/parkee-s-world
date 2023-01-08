const todoInput = document.querySelector('.main-todo-input')
const todoInputInput = document.querySelector('.main-todo-input__input')
const todoLists = document.querySelector('.main--todolists')

let newTodoList = []

todoInput.addEventListener('submit', handleSubmit)


function handleSubmit (event) {
    event.preventDefault()
    const todoList = todoInputInput.value;
    todoInputInput.value = "";
    const matchList = {
        text : todoList,
        id : Date.now(),
    }
    newTodoList.push(matchList)
    saveTodo()
    printTodo(matchList)
}

function printTodo (todoList) {
    const span = document.createElement('span')
    const button = document.createElement('button')
    todoLists.appendChild(span)
    span.innerText= `${todoList.text}`
    span.appendChild(button)
    span.classList.add('main--todolists__list')
    span.id = `${todoList.id}`
    button.innerText = `X`
    button.classList.add('button')
    button.addEventListener('click', deleteList)
}
const savedList = localStorage.getItem('list')
const getSavedList = JSON.parse(savedList)

if (savedList !== null) {
    getSavedList.forEach(printTodo)
    newTodoList = getSavedList
}





function saveTodo () {
    localStorage.setItem('list', JSON.stringify(newTodoList))
}

function deleteList (event) {
    const deleteTarget = event.target.parentElement
    deleteTarget.remove()
    newTodoList = newTodoList.filter(toDo => toDo.id !== parseInt(deleteTarget.id))
    saveTodo()    
}