$(function() {
    const menu = $('#menu');
    const menuOpenBtn = $('#menu_open_btn');
    const menuCloseBtn = $('#menu_close_btn');
    
    //to open menu bar.....
    let isMenuOpen = false;
    const toogleMenu =()=>{
        if(!isMenuOpen){
            console.log('opening...');
            menu.removeClass('menuSlideClose');
            menu.addClass('menuSlideOpen');
            isMenuOpen = !isMenuOpen;
        }
        else if(isMenuOpen){
            console.log('closing...');
            menu.removeClass('menuSlideOpen');
            menu.addClass('menuSlideClose');
            isMenuOpen = !isMenuOpen;
        }
    }
    //event handlers for open and close buttons
    menuOpenBtn.on('click', toogleMenu);
    menuCloseBtn.on('click',toogleMenu);
});

$(function() {
    const showFullDesc = $('#see_more');
    const descContainer = $('#products_description_container');
    let isDescFull = false;
    
    const toogleDesc =()=>{
        if(!isDescFull){
            descContainer.css('height','fit-content');
            showFullDesc.innerHTML='Hide';
            isDescFull = !isDescFull;
        }
        else if(isDescFull){
            descContainer.css('height','4.5em');
            showFullDesc.innerHTML='Show more...';
            isDescFull = !isDescFull;
        }
    }
    showFullDesc.on('click',toogleDesc)
});

//to change place holders in search bars 
        //this functions can be controlled from the back end because of users searches

window.onload= function(){
    const searchInput = document.getElementById('search_bar')
    const searchHints = [
        'Search Products Categories and Brands',
        'Fashion',
        'Electronics',
        'Appliances',
        'shoes',
        'cosmetics',
        'Gadgets',
        'Lots more...'
    ]
    let count = 0;
    
    
    const changeSearchHint=()=>{
        searchInput.setAttribute('placeholder',searchHints[count]);
        if(count>=7) count=0;
        else count++;
    }
    setInterval(changeSearchHint,3000);
}
