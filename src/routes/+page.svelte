<script lang="ts">
	import type { User } from '$lib';
	import '../global.css';
	export let data;
	$: disabled = !user.name || !user.phone || !user.zip;
	let removePhone = '';
	let user: User = {
		name: '',
		phone: '',
		zip: ''
	};

	async function addUser() {
		// const client = createClient();
		// const res =
		// 	await client.sql`INSERT INTO users (name, phone, zip) VALUES (${user.name}, ${user.phone}, ${user.zip})`;
		user.name = '';
		user.phone = '';
		user.zip = '';
	}

	function removeUser() {
		// const client = createClient();
		// client.sql`DELETE FROM users WHERE phone = ${removePhone}`;
	}
</script>

<div>
	{JSON.stringify(data)}
</div>

<div class="main">
	<div class="container">
		<h2>Add User To Daily Texts</h2>
		<input type="text" placeholder="Name" bind:value={user.name} />
		<input type="text" placeholder="Phone Number" bind:value={user.phone} />
		<input type="text" placeholder="Zip Code" bind:value={user.zip} />
		<div class="button"><button {disabled} class="break" on:click={addUser}>Add</button></div>

		<h2>Remove User From Daily Texts</h2>
		<input type="text" placeholder="Phone Number" bind:value={removePhone} />
		<button disabled={!removePhone} class="break" on:click={removeUser}>Remove</button>

		<h2>Users</h2>
	</div>
</div>

<style>
	.main {
		display: flex;
		justify-content: center;
		height: 100vh;
	}
	button {
		width: 320px;
	}
	input {
		width: 300px;
	}
	.break {
		margin-bottom: 50px;
	}
</style>
