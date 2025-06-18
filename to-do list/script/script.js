function addTask() {
	const task = document.getElementById('taskInput');
	const taskText = task.value.trim();

	if (taskText === "") return;

	const li = document.createElement('li');
	li.textContent = taskText;

	li.addEventListener('click', () => {
		li.classList.toggle('completed');
	});

	const deleteBtn = document.createElement('button');
	deleteBtn.textContent = '❌';
	deleteBtn.id = "deleteBtn";
	deleteBtn.onclick = () => li.remove();

	li.appendChild(deleteBtn);
	document.getElementById('taskList').appendChild(li);

	task.value = '';
}