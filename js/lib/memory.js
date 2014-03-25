var animals = ["Giraffe", "Giraffe", "Monkey", "Monkey", "Cat", "Cat", "Dog", "Dog", "Hippo", "Hippo", "Zebra", "Zebra"];
var showCount = 0;
var pickedAnimals = new Array();

function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}

var shuffledArray = shuffleArray(animals);

for (var i = 0; i <= 11; i++) {
	$("#" + (i + 1) + " .name").html(animals[i]);
	$("#" + (i + 1)).attr("data-animal", animals[i]);
}

$(".game-board td").on("click", function() {
	var animalSelected = $(this).attr("data-animal");
	pickedAnimals.push(animalSelected);

	$(this).children(".name").fadeIn();

	function resetArray() {
		pickedAnimals = new Array();
	}

	if (pickedAnimals.length === 2 && pickedAnimals[0] === pickedAnimals[1]) {
		for (var i = 1; i <= 12; i++) {
			if ($("#" + i).attr("data-animal") === pickedAnimals[0]) {
				$("#" + i).children(".name").addClass("active").removeClass("name");
				$("#" + i).css("background-color", "#CCFFCC");
			}
		}
		resetArray();
	} else if (pickedAnimals.length === 2 && pickedAnimals[0] !== pickedAnimals[1]) {
		setTimeout(function() {
			alert("Nope! Sorry...");
			$(".name").fadeOut();
			resetArray();
		}, 500);
	}
});