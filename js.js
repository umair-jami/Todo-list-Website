
// const todoform = document.querySelector(".form-todo")
// const todotext =document.querySelector(".form-todo input[type='text']")
// const todolist=document.querySelector(".todo-list")

// todoform.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     const todovalue=todotext.value
//     const newLi=document.createElement("li")
//     const newLiinnerHtml=
//     `<span class="text">${todovalue}</span>
//     <div class="todo-buttons">
//         <button class="todo-btn done">Done</button>
//         <button class="todo-btn remove">Remove</button>
//     </div>`
//     newLi.innerHTML=newLiinnerHtml
//     todolist.append(newLi)
//     todotext.value=""
// })

const todoform=document.querySelector(".form-todo")
const todoText=document.querySelector(".form-todo input[type='text']")
const todolist=document.querySelector(".todo-list")

todoform.addEventListener("submit",(e)=>{
    e.preventDefault()
    const todovalue=todoText.value
    const newli=document.createElement('li')
    const todoInnerHtml= `<span class="text">${todovalue}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`
    newli.innerHTML=todoInnerHtml
    todolist.append(newli)
    todoText.value=""
})

todolist.addEventListener("click",(e)=>{
    if(e.target.classList.contains("done")){
        const lispan=e.target.parentNode.previousElementSibling;
        console.log(lispan.style.textDecoration="line-through")
    }
    if(e.target.classList.contains("remove")){
        const todoparent=e.target.parentNode.parentNode
        todoparent.remove()
    }
})