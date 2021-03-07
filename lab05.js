alert("Welcome to our shop");
var item = prompt("choose your favourite choclate");

while( item!="white" && item!="dark")
  { item= prompt("choose your favourite choclate");  
  }
if (item=="white" || item=="dark")
 {
    document.write('<img src="https://www.deavas.be/wp-content/uploads/2017/01/img-slider-fresh-cream.jpg"> </img>');
    var num= prompt("How many peices do you want?");
}
var result= ('<img src="https://www.elsupplier.com/public/productImage/01572874068.jpeg"> </img>');
for(i=0; i<num ; i++)
{
 result= result;
 document.write(result);
}

    
  