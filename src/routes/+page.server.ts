import { createClient, sql } from '@vercel/postgres';

export async function load({ locals }) {
	const client = createClient();
	const res = await client.sql`SELECT * FROM users)`;
	return { res };
}
