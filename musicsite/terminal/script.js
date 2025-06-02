const input = document.getElementById("command");
const output = document.getElementById("output");

const files = [
	{
		name: "projekty",
		link: "projekty.html",
		perms: "-rw-r--r--",
		owner: "user",
		size: "2048",
		date: "Apr 10 14:00",
	},
	{
		name: "o-mnie",
		link: "o-mnie.html",
		perms: "-rw-r--r--",
		owner: "user",
		size: "1024",
		date: "Apr 10 14:05",
	},
	{
		name: "kontakt",
		link: "kontakt.html",
		perms: "-rw-r--r--",
		owner: "user",
		size: "512",
		date: "Apr 10 14:10",
	},
	{
		name: "cv",
		link: "cv.html",
		perms: "-rw-r--r--",
		owner: "user",
		size: "4096",
		date: "Apr 10 14:15",
	},
];

input.addEventListener("keydown", function (event) {
	if (event.key === "Enter") {
		const cmd = input.value.trim();
		output.innerHTML += `<div><span class="user">user@strona</span>:<span class="path">~</span>$ ${cmd}</div>`;
		handleCommand(cmd);
		input.value = "";
	}
});

function handleCommand(cmd) {
	if (cmd === "ls -l" || cmd === "ll") {
		files.forEach((file) => {
			output.innerHTML += `${file.perms} 1 ${file.owner} user ${file.size} ${file.date} ${file.name}\n`;
		});
	} else if (cmd.startsWith("cat ")) {
		const fileName = cmd.split(" ")[1];
		const file = files.find((f) => f.name === fileName);
		if (file) {
			window.location.href = file.link;
		} else {
			output.innerHTML += `cat: ${fileName}: No such file or directory\n`;
		}
	} else {
		output.innerHTML += `${cmd}: command not found\n`;
	}
}
