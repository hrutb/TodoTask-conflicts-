let todoArr = [
      {
        todoItem: "CSS",
        todoId: "e12-231-231wd-ew112e",
      },
      {
        todoItem: "JS & ES6",
        todoId: "we12-231-231wd-ew112e",
      },
      {
        todoItem:  "HTML",
        todoId: "qwe12-231-231wd-ew112e",
      },

]; 

const todoForm = document.getElementById('todoForm')
const todoItemContainer = document.getElementById('todoItem')
const todoContainer =document.getElementById('todoContainer');


function template(arr){
  let res = ' ' ;

  arr.forEach(ele=>{  
    res +=`<li id="${ele.todoId}" class="list-group-item d-flex justify-content-between">
                                    <strong>${ele.todoItem}</strong>
                                    <div>
                                        <i class="fa-solid fa-pen-to-square text-primary"></i>
                                        <i class="fa-solid fa-trash text-danger" onclick="onRemove(this)"></i>
                                    </div>
                                </li>`
  }) ;





  todoContainer.innerHTML= res;
}




template(todoArr)

function onTodoSubmit(eve) {
  eve.preventDefault()
  // cl('Submitted...')
  let newTodo ={
    todoItem : todoItemContainer.value ,
    todoId :  Date.now().toString()
  }
  // 4cl(newTodo)T
  todoArr.push(newTodo);

  let li = document.createElement('li');
  
  li.className = 'list-group-item d-flex justify-content-between';
  
  li.id = newTodo.todoId;

  li.innerHTML = `
            <strong>${newTodo.todoItem}</strong>
          <div>
              <i class="fa-solid fa-pen-to-square  text-primary"  ></i>
              <i class="fa-solid fa-trash-can   text-danger"  ></i>
          </div>
          `;

          todoContainer.append(li)
          
      swal.fire({
        title : `The new Todo item ${newTodo.todoItem} item added successfull...!`,
        timer : 3000,
        icon : 'success'
   })
}




function onRemove(ele) {

  let REMOVE_ID = ele.closest('li').id;



  let getIndex = todoArr.findIndex(todo => {
    return todo.todoId === REMOVE_ID;
  });

  let removedTodo = todoArr[getIndex];
 
  //Swal Alert
  Swal.fire({
    title: `Are you sure? You want to delete ${removedTodo.todoItem}!`,
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Yes, Delete it!",
    cancelButtonText: "Cancel"
  }).then((result) => {



    if(result.isConfirmed){

      let removeTodo = todoArr.splice(getIndex, 1);

      ele.closest('li').remove();

      Swal.fire({
        title: `The todo item ${removeTodo[0].todoItem} removed successfully!!!`,
        icon: "success",
        timer: 3000
      });
    }
  });
}




todoForm.addEventListener('submit',onTodoSubmit)