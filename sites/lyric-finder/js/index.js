// GitHub Pages URL:
// https://jaybitdesign.github.io/class-assignments/javascript/7/index.html
//
// GitHub Repo URL:
// https://github.com/jaybitdesign/class-assignments/tree/master/javascript/7
//

$("#form").on("submit", function(event) {
  event.preventDefault();
  var artist = $("#artist").val();
  var song = $("#song").val();

  console.log(artist + ": " + song);

  fetch("https://api.lyrics.ovh/v1/" + artist.toLowerCase() + "/" + song.toLowerCase())
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        // Examine the text in the response
        response.json().then(function(data) {

          var newData = data.lyrics.replace(/\n/ig, "<br>");

          console.log(newData);

          $("#results").html("<h6>" + newData + "</h6>");
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });

})
