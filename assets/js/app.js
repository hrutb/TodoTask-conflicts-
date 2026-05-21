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
const updateTodoBtn = document.getElementById('updateTodo')




function template(arr){
  let res = ' ' ;

  arr.forEach(ele=>{  
    res +=`<li id="${ele.todoId}" class="list-group-item d-flex justify-content-between">
                                    <strong>${ele.todoItem}</strong>
                                    <div>
                                      
                                        <i class="fa-solid fa-pen-to-square text-primary"  onclick="onedit(this)"></i>
                                        <i class="fa-solid fa-trash text-danger" onclick="onRemove(this)"></i>
                                    </div>
                                </li>`
  }) ;

  todoContainer.innerHTML= res;
}

template(todoArr);
