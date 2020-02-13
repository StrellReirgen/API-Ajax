function generatepokemon(){
	var pokemon = "";
	for (var i = 1; i <= 807; i++) {
		pokemon += '\n<img id="' + i + '" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + i + '.png">\n';
	};
	document.getElementById("pokemon").innerHTML = pokemon;
}
generatepokemon();
$(document).ready(function(){
    $('img').click(function(){
        var iden =  $(this).attr("id");
	    $.get("https://pokeapi.co/api/v2/pokemon/" + iden, function(res) {
                    console.log(res);
                    var html_str = "";
                    html_str += "<h1>#" + iden + "</h1>";
                    if (iden < 803) {
                        html_str += "<img src='" + res.sprites.front_default + "'>";
                        html_str += "<img src='" + res.sprites.front_shiny + "'>";
                    } else {
                        html_str += "<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + iden + ".png'>";
                        html_str += "<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + iden + ".png'>";
                    }
                    html_str += "<h2>" + res.name + "</h2>";
                    html_str += "<h4>Data</h4>";
                    html_str += "<ul class='list'>";
                    html_str += "<li class='data'>Base Experience: " + res.base_experience + "</li>";
                    html_str += "<li class='data'>Height: " + res.height + "</li>";
                    html_str += "<li class='data'>Weight: " + res.weight + "</li>";
                    html_str += "</ul>";
                    html_str += "<h4>Types</h4>";
                    html_str += "<ul class='list2'>"; 
                    for(var i = 0; i < res.types.length; i++) {
                        html_str += "<li>" + res.types[i].type.name + "</li>";
                    }
                    html_str += "</ul>";
                    html_str += "<h4>Abilities</h4>";
                    html_str += "<ul class='list2'>"; 
                    for(var i = 0; i < res.abilities.length; i++) {
                        html_str += "<li>" + res.abilities[i].ability.name + "</li>";
                    }
                    html_str += "</ul>";
                    $("#info").html(html_str);
                }, "json");
    });
});