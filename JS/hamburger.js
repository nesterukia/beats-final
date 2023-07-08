const hamburger = document.querySelector('.hamburger');
const body = document.querySelector('body');

const popupMenu = document.querySelector('.menu').cloneNode();
const popupMenuItems = document.querySelector('.menu__items').cloneNode();
const popupMenuItem = document.querySelectorAll('.menu__item');

for(let i = 0; i < popupMenuItem.length; i++){
    let item = popupMenuItem[i].cloneNode(true);
    item.classList.add('menu__item--vertical-menu');
    popupMenuItems.appendChild(item);
}


hamburger.addEventListener('click', function(){
    const verticalMenuContainer = document.createElement('div');
    verticalMenuContainer.classList.add('popup-menu');
    verticalMenuContainer.style.position = "fixed";
    verticalMenuContainer.style.zIndex = "30";
    verticalMenuContainer.style.top = "0";
    verticalMenuContainer.style.left = "0";
    verticalMenuContainer.style.width = "100vw";
    verticalMenuContainer.style.height = "100vh";
    verticalMenuContainer.style.background = "#666666";
    body.appendChild(verticalMenuContainer);

    const closeButton = document.createElement('button');
    closeButton.classList.add('button');
    closeButton.classList.add('button--cross-button');
    closeButton.style.position = "absolute";
    closeButton.style.right = "4%";
    closeButton.style.top = "4%";
    verticalMenuContainer.appendChild(closeButton);

    popupMenu.classList.add('menu--vertical-menu');
    verticalMenuContainer.appendChild(popupMenu);
    popupMenuItems.classList.add('menu__items--vertical-menu');
    popupMenu.appendChild(popupMenuItems);

    closeButton.addEventListener('click', e =>{
        verticalMenuContainer.remove();
    });

    $("[data-scroll-to]").click( e=>{
        e.preventDefault();
        const $this = $(e.currentTarget);
        const target = $this.attr("data-scroll-to");
        const reqSection = $(`[data-section-id=${target}]`);
    
        performTransition(reqSection.index());
        verticalMenuContainer.remove();
    
    });
});

