// Make an array right here
var topics = ["Beyonce","Billie Eilish","Kehlani","Drake","Ciara"];


$("button").on("click",function(){
    var topics = $(this).attr(data-topics);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + 
    "&api_key=ql8qKxXmsskjoZ5qPEe9lGiyQyvlvONu";

    $.ajax({

    })
});



