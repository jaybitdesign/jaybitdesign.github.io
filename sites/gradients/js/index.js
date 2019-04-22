// GitHub Pages URL:
// https://jaybitdesign.github.io/class-assignments/javascript/6/index.html
//
// GitHub Repo URL:
// https://github.com/jaybitdesign/class-assignments/tree/master/javascript/6
//

$('#random').on('click', function(e) {
  e.preventDefault();
  generate();
});

function generate() {
  var color = randomColor({
    count: 2
  });

  var angle = Math.floor((Math.random() * 360) + 1);
  var gradient = "linear-gradient(" + angle + "deg, " + color[0] + ", " + color[1] + ")";

  console.log(gradient);



  $("#sub-title").text(gradient);
  $("#sub-title").css("background", gradient);
  $("html").css("background", gradient).fadeIn();

}

new ClipboardJS('.custom-button');

generate();
