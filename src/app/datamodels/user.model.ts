export class User {
	id: string;
	username: string;
	role: string;
	constructor(user: { id: string; username: string; role: string }) {
		this.id = user.id;
		this.username = user.username;
		this.role = user.role;
	}
}