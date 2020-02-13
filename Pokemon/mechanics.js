function generatepokemon(){
	var pokemon = "";
	for (var i = 1; i <= 807; i++) {
		pokemon += '\n<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + i + '.png">\n';
	};
	document.getElementById("pokemon").innerHTML = pokemon;
}
generatepokemon();