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


const todoContainer =document.getElementById('todoContainer');

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

function template(arr){
  let res = ' '; 

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


