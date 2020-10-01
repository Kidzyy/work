


var colorsArr = ["red","blue","green","white", "black","purple","pink","yellow"];


function colors() {
    $('#div4').html('');
    var $colorguess =  $('<div id="colorsguess" class="row"></div>');
	var $colors =  $('<div id="colors" class="row"></div>');
	var index = colorsArr.length - 1;
    while(index >= 0){
		var $color = $('<button  class="column color" id="'+ index +'" onclick="colorfunc(this.id)" style="background-color: ' + colorsArr[index] +'"></button>');
		$colors.append($color);
		index--;
	}
	$colors.append($colorguess);
	$('#div4').append($colors);

}
function colorfunc(id) {
	var arr = [colorsArr[id]];
	var newarr =[];
	for (var i = 0; i < colorsArr.length; i++) {
		newarr.push(colorsArr[i]);
	};
	newarr.splice(id,1);
	for (var i = newarr.length - 1; arr.length < 4 ; i--) {
		var index = Math.floor(Math.random() * i);
		arr.push(newarr[index]);
		newarr.splice(index,1);
	};
	$('#colorsguess').html('');
	var $colors =  $('#colorsguess');
	var index = arr.length - 1;
    while(index >= 0){
    	var i= Math.floor(Math.random() * (index + 1));
		var $color = $('<button  class="column colorguess" id="'+ index +'" onclick="colorguess(this.id)" >'+ arr[i]+'</button>');
		arr.splice(i,1);
		$colors.append($color);
		index--;
	}
	$('#div4').append($colors);
	

}

// function Game(name,) {
// 	var instence={};
// 	instence.name = name;
// 	instence.answer = answer;
// 	instence.gamePlay = gamePlay;
// 	instence.array = array;
// 	return instence;
// }
// function colors(array){


// }