document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addBtn = document.getElementById('addBtn');
  const taskList = document.getElementById('taskList');

  // Проверка: если элементов нет, выходим, чтобы не было ошибок в консоли
  if (!taskInput || !addBtn || !taskList) {
    console.error('Не найдены элементы taskInput, addBtn или taskList. Проверь ID в HTML.');
    return;
  }

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.className = 'task-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
      li.classList.toggle('completed', checkbox.checked);
    });

    const span = document.createElement('span');
    span.textContent = taskText;

    li.appendChild(checkbox);
    li.appendChild(span);

    taskList.appendChild(li);
    taskInput.value = '';
  }

  addBtn.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
  });
});
