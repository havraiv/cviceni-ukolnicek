console.log('funguju!');

// V hlavním souboru index.js vytvořte komponentu Task, která bude představovat jeden úkol. Komponenta bude jako svoje props očekávat objekt s jedním úkolem.

const Task = (props) => {
  if (props.done === true) {
  } else {
  }
  return `<div class="task">
  <div class="task__body">
    <div class="task__name">${props.name}</div>
    <div class="task__due">${props.due}</div>
  </div>
  <div class="task__done">✓</div>
</div>`;
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
