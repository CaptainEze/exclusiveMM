
var searchBar = document.getElementById('search_bar');
searchBar.onchange = (e)=>{
    window.location.href = './categoriesPage.html?'+e.target.value;
}
alert('hi')
var queryString = location.search.substring(1);
var productDetails = queryString.split("|");
var imgUrl = decodeURIComponent(productDetails[0]);
var rating = decodeURIComponent(productDetails[1]);
var price = decodeURIComponent(productDetails[2]);
var name = decodeURIComponent(productDetails[3]);
var desc = decodeURIComponent(productDetails[4]);


const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const rate = document.getElementById('rating');
const priceTag = document.getElementById('price');
const productName = document.getElementById('products_name');
const descTag = document.getElementById('description');

priceTag.innerHTML= '$'+price;
productName.innerHTML = name;
rate.innerHTML = rating;
img1.style.backgroundImage = imgUl;

description.innerHTML = desc;
