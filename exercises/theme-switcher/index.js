
function switchGray() {
  let gray= $("#grayButton");
  let gray2= $("body");
  let gray3= $("h1");
  let gray4= $("p");
  gray.css("background", "gray");
  gray.css("color", "white");
  gray2.css("background", "gray");
  gray3.css("color", "white");
  gray4.css("color", "white");
}
$("#grayButton").on("click",switchGray);

function switchWhite() {
  let white= $("#whiteButton");
  let white2= $("body");
  let white3= $("h1");
  let white4= $("p");
  white.css("background", "white");
  white.css("color" , "black");
  white2.css("background", "white");
  white3.css("color" , "black");
  white4.css("color" , "black");
}
$("#whiteButton").on("click",switchWhite);
