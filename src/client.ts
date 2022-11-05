import dotenv from 'dotenv';
import { Client } from '@notionhq/client';

dotenv.config();

class DadosNotion {
    private databaseProjects = process.env.DATABASE_PROJECT_ID;
    private databaseSkills = process.env.DATABASE_SKILLS_ID;

    private notion = new Client({
        auth: process.env.TOKEN,
    });

    public async getProjects() {
        if (!this.databaseProjects) throw Error('Token dos Projetos com Error');

        const response = await this.notion.databases.query({
            database_id: this.databaseProjects,
        });
        return response;
    }

    public async getSkills() {
        if (!this.databaseSkills) throw Error('Token dos Skills com Error');

        const response = await this.notion.databases.query({
            database_id: this.databaseSkills,
        });
        return response;
    }
}

export default DadosNotion;
