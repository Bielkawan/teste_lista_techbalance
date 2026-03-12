const express = require('express');
const cors = require('cors');
const db = require('./database.js');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor rodando!');
});

app.post('/tasks', (req, res) => {
    const { title, description } = req.body;

    if (!title) {
        return res.status(400).json({ error: 'O título é obrigatório!' });
    }

    const query = `INSERT INTO tasks (title, description) VALUES (?, ?)`;

    db.run(query, [title, description], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({
            id: this.lastID,
            title,
            description,
            status: 'pendente'
        });
    });
});

app.get('/tasks', (req, res) => {
    const query = 'SELECT * FROM tasks';

    db.all(query, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const query = `UPDATE tasks SET status = ? WHERE id = ?`;

    db.run(query, [status, id], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Tarefa atualizada com sucesso!' });
    });
});

app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;

    const query = `DELETE FROM tasks WHERE id = ?`;

    db.run(query, [id], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Tarefa removida com sucesso!' });
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`O servidor iniciou na porta ${PORT}`);
});