const defaultProductImg = 'https://techmall.com.ng/wp-content/uploads/2021/09/HP-Laptop-14-DK1006NIA%E2%80%93-2B0A8EA-1.jpg';
const defaultProductRate = 4.7;
const defaultProductPrice = 7000;
const defaultName = 'Product';
const defautDesc = 'This is the description of the product this contains the full explanation of the products quality';

class Products{
    constructor(imgUrl,rating,price,name,desc){
        this.imgUrl = 'url(\''+imgUrl+'\')';
        this.rating = rating;
        this.price = price;
        this.name = name;
        this.desc = desc;
    }
    
    
    imgUrl = '';
    rating = 0;
    price = 0;
    name='';
    desc = '';
    aTag = document.createElement('a');
    btn = document.createElement('button');
    pTag = document.createElement('p');
}



