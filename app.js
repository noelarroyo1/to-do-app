function onReady(){
  var toDos = [];
  var addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo(){
    var newToDoText = document.getElementById('newToDoText');
    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value = '';

    renderTheUI(toDos);
  }

  function renderTheUI(toDos){
    var toDoList = document.getElementById('toDoList');

    toDoList.innerHTML = '';

    toDos.forEach(function(toDo){
      var newLi = document.createElement('li');
      var checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.innerHTML = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });
  }

  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI(toDos);
}

  /*const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    //get the text
    let title = newToDoText.value;

    //create a new li
    let newLi = document.createElement('li');

    //create a new input for the checkbox
    let checkbox = document.createElement('input');

    //create delete button
    let remove = document.createElement('button');
    remove.textContent = 'delete';
    remove.addEventListener('click', (event) => {
      let confirmation = confirm('Are you sure you want to delete this item?');
      if(!confirmation){
        return;
      }
      newLi.remove();
    })

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    //set the title
    newLi.textContent = title;

    //attach it to the ul
    toDoList.appendChild(newLi);

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach delete button to newLi
    newLi.appendChild(remove);

    //empty the input
    newToDoText.value = '';
 });*/


window.onload = function(){
  onReady();
};
