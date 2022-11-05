declare global {
    namespace NodeJS {
        interface ProcessEnv {
            TOKEN: string;
            DATABASE_PROJECT_ID: string;
            DATABASE_SKILLS_ID: string;
        }
    }
}

export {};
