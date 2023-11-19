function main(config) {
	let dbHost = config?.db?.host;
	console.log(dbHost);
}
main({
	db: {
		host: "192.168.1.101",
		username: "root",
	},
	cache: {
		host: "192.168.1.102",
		username: "admin",
	},
}); // 192.168.1.101
main({}); // undefined
