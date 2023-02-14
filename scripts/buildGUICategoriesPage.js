alert('hi');
const changeUrl =(qStr)=>{
    let oldURL= window.location.href;
    let oldQueryString = decodeURIComponent(location.search.substring(1));
    let newQueryString = qStr;
    let newURL= oldURL.replace(oldQueryString,newQueryString);
    return newURL;
}
const searchBar = document.getElementById('search_bar');
searchBar.onchange = (e)=>{
    window.location.href = changeUrl(e.target.value);
}


let category = decodeURIComponent(location.search.substring(1));


class categories extends Products{
    divTag = document.createElement('div');
    pTag2 = document.createElement('p');
    
    buildToGui=()=>{
        document.getElementById('categories_container').appendChild(this.aTag);
        this.aTag.appendChild(this.btn);
        this.aTag.appendChild(this.pTag);
        this.aTag.appendChild(this.pTag2);
        
        this.aTag.setAttribute('href','../assets/products_page.html?'+this.imgUrl+'|'+this.rating+'|'+this.price+'|'+this.name+'|'+this.desc);
        this.aTag.setAttribute('class','category');
        this.btn.setAttribute('class','product_img brdls_bx bg_white');
        this.pTag.setAttribute('class','cat_price bg_blue');
        this.pTag2.setAttribute('class','cat_name fnt_RBR bgls_bx');
        
        //set image
        this.btn.style.backgroundImage = this.imgUrl;
        
        this.pTag.innerHTML = '$'+this.price;
        this.pTag2.innerHTML = this.name;
    }
}

const addCategory =()=>{
    /*
        *this function fetches the data based on the category
    */
    let ImgArr = new Array;
    let RatingArr = new Array;
    let Prices = new Array;
    let Name = new Array;
    let Desc = new Array;
    
    
    
    //data fetch is based on category
    for (var i = 0; i < 28; i++) {
        try {
            gg
            ImgArr[i]=/*fetch imgUrl */'a';
            RatingArr[i]=/*fetch rating*/'a';
            Prices[i]=/*fetch price*/'a';
            Name[i]=/*~*/'a';
            Desc[i]=/*~*/'a';
            
        }
        catch (e) {
            ImgArr[i] = defaultProductImg;
            RatingArr[i] = defaultProductRate;
            Prices[i] = defaultProductPrice;
            Name[i] = defaultName;
            Desc[i] = defautDesc;
        }
    }
    
    for (var i = 0; i < 28; i++) {
        new categories(ImgArr[i],RatingArr[i],Prices[i],Name[i],Desc[i]).buildToGui();
    }
}

addCategory();
