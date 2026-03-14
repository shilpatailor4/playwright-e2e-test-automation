import dotenv from "dotenv";
import path from "path";
import fs from "fs";

const ENV = process.env.TEST_ENV || "local";

const envPath = path.resolve(process.cwd(), `src/config/env/${ENV}.env`);

if (!fs.existsSync(envPath)) {
  throw new Error(`Environment file not found: ${envPath}`);
}

dotenv.config({ path: envPath });
