var todos = [];

function listTodos() {
	console.log("**********");
	todos.forEach(function(todo, i) {
		console.log(i+ ": " + todo);
	});
	console.log("**********");
}

function newTodos() {
	var newTodo = prompt("Enter new todo");
 	todos.push(newTodo);
 	console.log("Added Todo");
}

function deleteTodos() {
	 var index = prompt("Enter index of todo to delete");
	 //splice()
	 todos.splice(index, 1);
	 console.log("Deleted Todo");
}

window.setTimeout(function() {
	do {
		var input = prompt("What would you like to do?");

	  if (input === "list") {
	  	listTodos();
	  }
	  else if (input === "new") {
	  	newTodos();
	  }
	  else if (input ==="delete") {
	  	deleteTodos();
	  }
	}
	while (input != "quit")

	console.log("OK, YOU QUIT THE APP");
  
}, 500);