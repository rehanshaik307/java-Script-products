var products=[
{
	img: "products/img/puma.jpeg",
	brand: "puma",
	cost: "60-90%+Extra 50%",
},
{
	img: "products/img/puma2.jpeg",
	brand: "puma",
	cost: "60-90%+Extra 50%",
},
{
	img: "products/img/puma3.jpeg",
	brand: "puma",
	cost: "60-90%+Extra 50%",
},
{
	img: "products/img/puma4.jpeg",
	brand: "puma",
	cost: "60-90%+Extra 50%",
},
]
var pro= document.getElementById("products");
var prod= "";
for(x of products)
{
	//console.log(product)
	prod += "<div class='prod'><img src = "+x.img+"><p>"+x.brand+"</p><p>"+x.cost+"</p></div>"
}
pro.innerHTML = prod;