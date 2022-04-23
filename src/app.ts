import { App } from './routes/api';
import * as dotenv from "dotenv";
import { MongoConnection } from './database/connection';

dotenv.config();
if (!process.env.PORT) {
    console.log(`Error to get env vars`);
    process.exit(1);
}

new MongoConnection(process.env.MONGO_URI);
new App().server.listen(process.env.PORT);
