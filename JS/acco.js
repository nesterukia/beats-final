// team__title = member__name
// team__item = member/team__member
// team__content = .member__desc-outer
// team = team

const openItem = item =>{
    const container = item.closest(".member");
    const contentBlock = container.find(".member__desc-outer");
    const textBlock = contentBlock.find(".member__desc-inner");
    const reqHeight = textBlock.height();
    const triangle = container.find(".member__triangle-icon");

    container.addClass("active");
    triangle.css('transform','rotate(180deg)');
    contentBlock.height(reqHeight);
}

const closeEveryItem = (container) =>{
    const items = container.find(".member__desc-outer");
    const triangles = container.find(".member__triangle-icon")
    const itemContainer = container.find(".member");

    itemContainer.removeClass("active");
    items.height(0);
    triangles.css('transform','rotate(0)');
    triangles.css('margin-top','5px');
    triangles.css('margin-left','5px');
}
$(".member__name").click(e =>{
    const $this = $(e.currentTarget);
    const triangle = $this.next();
    const container = $this.closest(".team");
    const elemContainer = $this.closest(".member");


    if(elemContainer.hasClass("active")){
        closeEveryItem(container);
    }
    else{
        closeEveryItem(container);
        openItem($this);
        triangle.css('transform','rotate(180deg)');
        triangle.css('margin-top','0px');
    }
})