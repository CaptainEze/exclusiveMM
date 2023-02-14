//var topPicks = document.getElementById('top_picks');
var searchBar = document.getElementById('search_bar');
searchBar.onchange=(e)=>{
    window.location.href='./assets/categoriesPage.html?'+e.target.value;
}



class TopPicks extends Products{

    _class = 'top_picks';
    
    buildToGui=()=>{
        
        this.aTag.setAttribute('href','./assets/products_page.html?'+this.imgUrl+'|'+this.rating+'|'+this.price+'|'+this.name+'|'+this.desc);
        this.aTag.setAttribute('class','btns_in_a');
        document.getElementById('top_picks').appendChild(this.aTag);
        this.aTag.appendChild(this.btn);
        
        //set image
        this.btn.style.backgroundImage = this.imgUrl;
        
        //do price Tag
        
        this.aTag.appendChild(this.pTag);
        this.pTag.innerHTML= '$'+this.price;
        this.pTag.setAttribute('class','price');
        this.btn.setAttribute('class',this._class+' products_img');
    }
}

const addToTopPicks =()=>{
    
    let ImgArr = new Array;
    let RatingArr = new Array;
    let Prices = new Array;
    let Name = new Array;
    let Desc = new Array;
    
    for (var i = 0; i < 25; i++) {
        try {
            gg
            ImgArr[i]=/*fetch imgUrl*/'a';
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
    
    for (var i = 0; i < 25; i++) {
        new TopPicks(ImgArr[i],RatingArr[i],Prices[i],Name[i],Desc[i]).buildToGui();
    }
}
addToTopPicks();
addToTopPicks();
//______end top picks build



class HotToday extends Products{
    
    _class = 'hot_today';
    
    
    buildToGui=()=>{
        
        this.aTag.setAttribute('href','./assets/products_page.html?'+this.imgUrl+'|'+this.rating+'|'+this.price+'|'+this.name+'|'+this.desc);
        this.aTag.setAttribute('class','btns_in_a');
        document.getElementById('hot_today').appendChild(this.aTag);
        this.aTag.appendChild(this.btn);
        
        //set image
        this.btn.style.backgroundImage = this.imgUrl;

        //do price Tag
        
        this.aTag.appendChild(this.pTag);
        this.pTag.innerHTML= '$'+this.price;
        this.pTag.setAttribute('class','price')
        this.btn.setAttribute('class',this._class+' products_img');
    }
}

const addToHotToday =()=>{
    
    let ImgArr = new Array;
    let RatingArr = new Array;
    let Prices = new Array;
    let Name = new Array;
    let Desc = new Array;
    
    
    //code to fetch details for products
    
    for (var i = 0; i < 25; i++) {
        try {
            gg
            ImgArr[i]=/*fetch imgUrl*/'a';
            RatingArr[i]=/*fetch rating*/'a';
            Prices[i]=/*fetch price*/'a';
            Name[i]=/*fetch name*/'a';
            Desc[i]=/*fetch desc*/'a';
        }
        catch (e) {
            ImgArr[i] = defaultProductImg;
            RatingArr[i] = defaultProductRate;
            Prices[i] = defaultProductPrice;
            Name[i]=defaultName;
            Desc[i]=defautDesc;
        }
    }
    
    for (var i = 0; i < 25; i++) {
        new HotToday(ImgArr[i],RatingArr[i],Prices[i],Name[i],Desc[i]).buildToGui();
    }
}

addToHotToday();
addToHotToday();
addToHotToday();
