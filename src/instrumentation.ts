import { seedDatabase } from "./db/seed";

export async function register() {
  seedDatabase();
}
