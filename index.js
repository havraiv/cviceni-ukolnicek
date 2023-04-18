console.log('funguju!');

const Task = (props) => {
  console.log(props.done);
  if (props.done === true) {
    return `<div class="task">
  <div class="task__body">
    <div class="task__name">${props.name}</div>
    <div class="task__due">${props.due}</div>
  </div>
  <div class="task__done">✓</div>
</div>`;
  } else if (props.done === false) {
    return `<div class="task">
  <div class="task__body">
    <div class="task__name">${props.name}</div>
    <div class="task__due">${props.due}</div>
  </div>
  <div class="task__done">x</div>
</div>`;
  }
};

const renderTasks = () => {
  const todoElm = document.querySelector('.todo__tasks');
  fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks')
    .then((response) => response.json())
    .then((todolist) => {
      todolist.forEach((todolist) => {
        todoElm.innerHTML += Task(todolist);
      });
    });
};

renderTasks();
