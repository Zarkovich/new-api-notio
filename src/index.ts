import DadosNotion from './client';
import express from 'express';
import { GetProject, GetSkills } from './response';

const app = express();
const notion = new DadosNotion();

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/projects', async (req, res) => {
    const query = await notion.getProjects();

    const response = GetProject(query.results);

    res.send(response);
});

app.get('/skills', async (req, res) => {
    const query = await await notion.getSkills();

    const response = GetSkills(query.results);

    res.send(response);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
