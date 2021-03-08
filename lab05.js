alert("Welcome to our shop");
var item = prompt("choose your favourite choclate dark or white");

while (item != "white" && item != "dark") {
  item = prompt("choose your favourite choclate dark or white");
  document.write(item);
}

if (item == "white" || item == "dark") {
  document.write('<img src="https://www.deavas.be/wp-content/uploads/2017/01/img-slider-fresh-cream.jpg" class="dimension" > </img>');
  var num = prompt("How many peices do you want?");
}



if(item=='white'){
  var result = ('<img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/11/3/0/fnd_white-chocolate-thinkstock.jpg.rend.hgtvcom.616.462.suffix/1415036883121.jpeg" id="mydark"></img>');
for (i = 0; i < num; i++)

{
  result = result;
  document.write(result);
}


var type = function () {
  for (i = 0; i <= 2; i++) {
    
    document.write('<p class= "forming"> The best choclate shop</p>'); 
  }
}
}

if(item=='dark')
{var result = ('<img src="https://i2-prod.mirror.co.uk/incoming/article2912355.ece/ALTERNATES/s1200b/Chocolate-Bar.jpg" id="mydark"></img>');
for (i = 0; i < num; i++)

{
  result = result;
  document.write(result);
}

var type = function () {
  for (i = 0; i <= 2; i++) {
    
    document.write('<p class= "forming"> The best choclate shop</p>'); 
  }
}
}


/* var result = ('<img src="https://i2-prod.mirror.co.uk/incoming/article2912355.ece/ALTERNATES/s1200b/Chocolate-Bar.jpg" id="mydark"></img>');
for (i = 0; i < num; i++)

{
  result = result;
  document.write(result);
}

var type = function () {
  for (i = 0; i <= 2; i++) {
    
    document.write('<p class= "forming"> The best choclate shop</p>'); 
  }
}*/
type(); /*calling function*/



