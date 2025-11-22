import express from 'express';
import { testConnection } from './config/database.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'API REST para Gerenciamento do Zoológico está online!',
        instructions: 'Use a rota /db-test para verificar a conexão com o PostgreSQL.'
    });
});

app.get('/db-test', async (req, res) => {
    console.log('Testing database connection...');
    const isConnected = await testConnection();
    if (isConnected) {
        res.status(200).send({
            status: 'Success',
            message: 'Conexão com o PostgreSQL bem-sucedida! O banco de dados está pronto para ser usado.'
        });
    } else {
        res.status(503).send({
            status: 'Error',
            message: 'Falha na conexão com o banco de dados. Verifique o container Docker e as credenciais de conexão.'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`);
});