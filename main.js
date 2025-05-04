const dataItems ={
     {title:"children cry", p:"Take all candy frim children"},
     {title:"Get 5kb", p:"Take 5 kb from Nurgali if I say I love Kiberon","Hi","to catch fish","bild a house"}
}

const todoList = document.getElementById("todo_lists")

document.querySelector('#btn_submit').addEventListener('clik', () =>{
     const input.value
     input.value = ""
     
     const todo_el = document.createElement('div')
     todo_el.classList.add(todo_content_el)

     const todo_content_el = document.createElement('imput')
     todo_input_el.classList.add('text')
     todo_input_el.type = "text"
     todo_input_el.value = indexedData?inputData:data[Math.floor(Math.random()*data.length)].title
     todo_input_el.setAttibute("readontly", "readontly")

     const todo_input_el = document.createElement('input')
     todo_input_el.classList.add('text')
     todo_input_el.type = 'text'
     todo_input_el.valui =
     inputData?inputData:dataItems[Math.floor(Math.random()*dataItems.length)].title

     todo_input_el.setAttibute('readonly','readonly')

     todo_content_el.appendChild(todo_input_el)

     const todo_done_el = document.createElement('i')
     todo_actions_el.classList.add("fa_solid")
     todo_actions_el.classList.add("fa_check")

     const todo_edite_el = document.createElement('i')
     todo_actions_el.classList.add("fa_solid")
     todo_actions_el.classList.add("fa_check")

     const todo_delete_el = document.createElement('i')
     todo_actio_el.classList.add("fa_solid")
     todo_actio_el.classList.add("fa_check")

     todo_delete_el.appendChild(todo_content_el)
     todo_delete_el.appendChild(todo_content_el) 
     todo_delete_el.appendChild(todo_content_el)
     console.log(".todo_el")
     document.querySelector(".todo_lists").appendChild(todo_el)
})

todo_actio_el.appendChild(todo_done_el)
todo_actio_el.appendChild(todo_edite_el)
todo_actio_el.appendChild(todo_delete_el)

todo_el.appendChild(todo_actio_el)
console.log(todo_el)
document.querySelector("#todo-lists").appendChild(todo_el)