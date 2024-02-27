const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Conecta ao banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017/meu_banco_dados');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão com o banco de dados:'));
db.once('open', () => {
    console.log('Conectado ao banco de dados MongoDB');
});

// Define o esquema do documento
const formDataSchema = new mongoose.Schema({
    name: String,
    email: String
});

// Cria o modelo de dados
const FormData = mongoose.model('FormData', formDataSchema);

const app = express();

// Configura o middleware para lidar com dados JSON
app.use(express.json());
// Configura o middleware para lidar com dados do formulário
app.use(express.urlencoded({ extended: true }));

// Rota para servir o arquivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para receber os dados do formulário
app.post('/submit', async (req, res) => {
    const formData = new FormData({
        name: req.body.name,
        email: req.body.email
    });
    try {
        await formData.save();
        console.log('Dados salvos com sucesso:', formData);
        res.send('Dados enviados com sucesso!');
    } catch (error) {
        console.error('Erro ao salvar os dados:', error);
        res.status(500).send('Erro interno no servidor');
    }
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
