<script>
  const taskInput = document.getElementById('taskInput');
  const addBtn = document.getElementById('addBtn');
  const taskList = document.getElementById('taskList');

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return; // не добавляем пустые задачи

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
    taskInput.value = ''; // очищаем поле
  }

  addBtn.addEventListener('click', addTask);

  // чтобы можно было добавить задачу по нажатию Enter
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
  });
</script>











