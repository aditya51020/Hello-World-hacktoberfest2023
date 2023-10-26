let employees = [
	{ name: "Tony Stark", department: "IT" },
	{ name: "Peter Parker", department: "Pizza Delivery" },
	{ name: "Bruce Wayne", department: "IT" },
	{ name: "Clark Kent", department: "Editing" }
];

let output = employees.filter(employee => employee.department == "IT");
for (let i = 0; i < output.length; i++) {
	console.log(output[i].name)
};
