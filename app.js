$(document).ready(function() {

 	function displayWWEGiphs() {

	var queryURL = "https://api.giphy.com/v1/gifs/search?q=wwe&api_key=dc6zaTOxFJmzC&limit=6";

	console.log(queryURL);

	$.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
        	var results = response.data;
        	console.log(results);
        	for (var i = 0; i < results.length; i++) {
        	
        	var showDiv = $("<div class='col-xs-4'>");

        	var giphSrc = results[i].images.fixed_height.url;
        	var showImage = $("<img>");

            showImage.attr("src", giphSrc);
        	showImage.addClass("giphy");
        	showDiv.append(showImage);
        	$("#gifArea").prepend(showDiv);

        }
	});
}
displayWWEGiphs();

var trivBrock = true;

$("#brock").on("click", function(){
    if (trivBrock === true) {
        $("#trivAns").html("");
        $("#trivAns").html("<img src=https://s-media-cache-ak0.pinimg.com/originals/34/4e/ae/344eae5294b44ebdd3976675f7723e16.gif>");
        (trivBrock = false);
    } else if (trivBrock === false) {
        $("#trivAns").html("");
        (trivBrock = true);
    }

});

var trivGold = true;

$("#bill").on("click", function(){
    if (trivGold === true) {
        $("#trivAns").html("");
        $("#trivAns").html("<h4>Try Again</h4>");
        (trivGold = false);
    } else if (trivGold === false) {
        $("#trivAns").html("");
        (trivGold = true);
    }
});

});