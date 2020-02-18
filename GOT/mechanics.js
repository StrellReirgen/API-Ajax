$(document).ready(function() {
    $('img').click(function() {
        var casa = $(this).attr("alt");
        casa = casa.replace(/\s/g, "%20");
        console.log(casa);
        $.get("https://www.anapioficeandfire.com/api/houses?name=" + casa, function (res) {
            console.log(res);
            var info = "";
            info += "<h1>" + res[0].name + "</h1>";
            info += "<div id='info'>";
            info += "<h4>Region: </h4>";
            info += "<p>" + res[0].region + "</p>"
            info += "<h4>Titles: </h4>";
            info += "<ul class='list'>";
            for(var i = 0; i < res[0].titles.length; i++) {
                        info += "<li>" + res[0].titles[i] + "</li>";
                    }
            info += "</ul>";
            info += "<h4>Seats: </h4>";
            info += "<ul class='list'>";
            for(var i = 0; i < res[0].seats.length; i++) {
                        info += "<li>" + res[0].seats[i] + "</li>";
                    }
            info += "</ul>";
            info += "</div>";
            info += "<div id='image'>";  
            info += "<img class='coatofarms' src='" + res[0].words + ".png'>"
            info += "<h2>" + res[0].words + "</h2>";
            info += "</div>";
            $("#resultado").html(info);

        }, 'json');
    });
});