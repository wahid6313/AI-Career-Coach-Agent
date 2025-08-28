import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({

    schema: './configs/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.NEON_DB_CONNECTION_STRING!,
    },
});
