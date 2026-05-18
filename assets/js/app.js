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

// EDIT
const todoContainer =document.getElementById('todoContainer');
const todoForm = document.getElementById('todoForm');
const todoItemControl = document.getElementById('todoItem');
const addTodoBtn = document.getElementById('addTodoBtn');
const updateTodoBtn = document.getElementById('updateTodoBtn');

let EDIT_ID = null;

function onRemove(ele) {

  let REMOVE_ID = ele.closest('li').id;

  let getIndex = todoArr.findIndex(todo => {
    return todo.todoId === REMOVE_ID;
  });

  let removedTodo = todoArr[getIndex];

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

// EDIT
function onEdit(ele){

  EDIT_ID = ele.closest('li').id;

  let editObj = todoArr.find(todo => {
    return todo.todoId === EDIT_ID;
  });

  todoItemControl.value = editObj.todoItem;

  addTodoBtn.classList.add('d-none');
  updateTodoBtn.classList.remove('d-none');
}


function template(arr){
  let res = ' '; 

  arr.forEach(ele=>{  
    res +=`<li id="${ele.todoId}" class="list-group-item d-flex justify-content-between">
                                    <strong>${ele.todoItem}</strong>
                                    <div>
                                        <i class="fa-solid fa-pen-to-square text-primary" onclick="onEdit(this)"></i>
                                        <i class="fa-solid fa-trash text-danger" onclick="onRemove(this)"></i>
                                    </div>
                                </li>`
  }) ;

  todoContainer.innerHTML= res;
}

template(todoArr)


