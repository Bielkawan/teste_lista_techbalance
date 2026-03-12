const API_URL = 'http://localhost:3000/tasks';

async function fetchTasks() {
    try {
        const response = await fetch(API_URL);
        const tasks = await response.json();
        renderTasks(tasks);
    } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
    }
}

function renderTasks(tasks) {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.status === 'concluida' ? 'completed' : ''}`;
        
        li.innerHTML = `
            <div class="task-info">
                <h3>${task.title}</h3>
                <p>${task.description || ''}</p>
            </div>
            <div class="actions">
                <button class="btn-done" onclick="toggleTask(${task.id}, '${task.status}')">
                    ${task.status === 'pendente' ? 'Concluir' : 'Refazer'}
                </button>
                <button class="btn-delete" onclick="deleteTask(${task.id})">Excluir</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

document.getElementById('add-btn').addEventListener('click', async () => {
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-desc').value;

    if (!title) return alert('O título é obrigatório!');

    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description })
    });

    document.getElementById('task-title').value = '';
    document.getElementById('task-desc').value = '';
    fetchTasks();
});

async function toggleTask(id, currentStatus) {
    const newStatus = currentStatus === 'pendente' ? 'concluida' : 'pendente';
    
    await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
    });
    fetchTasks();
}

async function deleteTask(id) {
    if (!confirm('Tem certeza que deseja excluir?')) return;

    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });
    fetchTasks();
}

fetchTasks();