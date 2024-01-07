import { createClient } from '@vercel/postgres';

export async function load() {
	const client = createClient();
	const res = await client.sql`SELECT * FROM users)`;
	return { res };
}
