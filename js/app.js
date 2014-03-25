//Write an array called animals that has 6 different animals in it. Repeat each animal once.

var showCount = 0;
var pickedAnimals = new Array();

function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	//RETURN the variable "array" here
}

//Create a variable called shuffledArray calling the function "shuffleArray" and passing in the "animals" array as a parameter

//Write the beginning of the FOR loop from 0 to 11
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
		//Write the beginning of a FOR loop from 1 to 12
			if ($("#" + i).attr("data-animal") === pickedAnimals[0]) {
				$("#" + i).children(".name").addClass("active").removeClass("name");
				$("#" + i).css("background-color", "#CCFFCC");
			}
		}
		//Call the function resetArray here
	} else if (pickedAnimals.length === 2 && pickedAnimals[0] !== pickedAnimals[1]) {
		setTimeout(function() {
			//Write an alert here saying whatever you like. This is triggered when the two animals don't match
			$(".name").fadeOut();
			//Call the function resetArray here
		}, 500);
	}
});