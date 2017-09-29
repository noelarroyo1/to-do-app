function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
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
    var remove = document.createElement('button')

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
  });

addToDoForm.addEventListener('click', (event) => {
  event.preventDefault();
    var confirmation = confirm('Are you sure you want to delete this item?');
    if(confirmation == true){
      return delete(newLi);
    }
  });

}

window.onload = function(){
  onReady();
};
