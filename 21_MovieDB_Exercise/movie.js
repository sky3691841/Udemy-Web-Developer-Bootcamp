var movie = [
	{
		title: "Interstellar",
		rating: 5,
		hasWatched: true,
	},
	{
		title: "Mad Max Fury Road",
		rating: 4.5,
		hasWatched: true,
	},
	{
		title: "Deadpool",
		rating: 2,
		hasWatched: false,
	},
	{
		title: "Friends With Benefits",
		rating: 3,
		hasWatched: false,
	}

]

for (var i = 0; i < movie.length; i++) {
	var text = " ";
	
	if (movie[i].hasWatched === true) {
		text = "watched ";
	}
	else {
		text = "not seen ";
	}
	var result = "You have " + text + movie[i].title + " - " + movie[i].rating + " stars";
	console.log(result);
}