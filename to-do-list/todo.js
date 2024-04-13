const todoList = [{
  name : 'do coding',
  time : '12/04/2024'
}];

render();


function render(){
  let html = ``;
  for (let i = 0; i < todoList.length; i++) {
    let todo = todoList[i];
    //let name = todo.name;
    //let time = todo.time;
    const {name, time} = todo;
    console.log(todoList[i]);
    html += `<div>${name}</div> <div>${time}</div> <button class="delete-button" ;onclick="todoList.splice(${i},1); render();">Delete</button>`;
  }
  document.querySelector('.js-todoList').innerHTML = html;
}  

function addToDo(){
  const name = document.querySelector('.js-add').value;
  const time = document.querySelector('.js-date').value;
  //const name = addElement.value;
  //const date = addDate.value;
  todoList.push({name , time});

  document.querySelector('.js-add').value = '';
  render()
}


