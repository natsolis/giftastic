
// var topics = ["Beyonce","Billie Eilish","Kehlani","Drake","Ciara"]


// function array() {
//   for (var i = 0; i < topics.length; i++) {
//     var button = $("<button>")
//     button.text(topics[i])
//     button.addClass("gifButton")
//     button.val(topics[i])
//     $('#gifs-appear-here').append(button)
   
//   }
// }
//   array();




$("button").on("click",function(){
    $("#gifs-appear-here").html("");
    var topics = $(this).attr("data-topics");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + 
    "&api_key=ql8qKxXmsskjoZ5qPEe9lGiyQyvlvONu&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"

    }).then(function(response){
        console.log(response)
     var results = response.data;

    
     for (var i = 0; i < results.length; i++){
         var topicsDiv = $("<div>");
        
         var p = $("<p>").text("Rating: " + results[i].rating);
         
         var topicImage = $("<img>");
         
         topicImage.attr("src", results[i].images.fixed_height.url);

        //  button.attr(data-topics);
         
         topicsDiv.append(p);
          
         topicsDiv.append(topicImage);
          
          $("#gifs-appear-here").append(topicsDiv);
     }
    
    });
    
});



