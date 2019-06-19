// Make an array right here
// var topics = ["Beyonce","Billie Eilish","Kehlani","Drake","Ciara"]

// function array() {
//   for (var i = 0; i < topics.length; i++) {
//     document.getElementById("#gifs-appear-here").innerHTML += "<button>" + topics[i] + "</button>";
//   }
// }
//   array();




$("#button").on("click",function(){
    var topics = $(this).attr(data-topics);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + 
    "&api_key=ql8qKxXmsskjoZ5qPEe9lGiyQyvlvONu&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"

    }).then(function(response){
     var results = response.data;
    
     for (var i = 0; i < results.length; i++){
         var topicsDiv = $("<div>");
        
         var p = $("<p>").text("Rating: " + results[i].rating);
         
         var topicImage = $("<img>");
         
         topicImage.attr("src", results[i].images.fixed_height.url);
         
         topicsDiv.append(p);
          
         topicsDiv.append(topicsImage);
          
          $("#gifs-appear-here").prepend(topicsDiv);
     }
    
    });
    
});



