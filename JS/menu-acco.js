const measureWidth = item => {

    let reqItemWidth = 0;
    const screenWidth = $(window).width();
    const container = item.closest(".colours-menu");
    const titlesBlocks = container.find(".colour__title");
    const titlesWidth = titlesBlocks.width() * titlesBlocks.length;

    const textContainer = item.find(".colour__container");
    const padding = parseInt(textContainer.css("padding"));

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if(isMobile){
        reqItemWidth = screenWidth - titlesWidth;
    }
    else{
        reqItemWidth = 500;
    }

    return{
        container: reqItemWidth,
        textContainer: reqItemWidth - 2*padding
    }
}

const closeEveryItemInContainer = container =>{
    const items = container.find(".colour");
    const content = container.find(".colour__content");
    items.removeClass("active");
    content.width(0);
}

const openItem2 = item => {
    const hiddenContent = item.find(".colour__content");
    const reqWidth = measureWidth(item);
    const textBlock = item.find(".colour__container")
    item.addClass("active");
    hiddenContent.width(reqWidth.container);
    textBlock.width(reqWidth.textContainer);
}

$(".colour__title").on("click", e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closest(".colour");
    const itemOpened = item.hasClass("active");
    const container = $this.closest(".colours-menu");

    if(itemOpened){
        closeEveryItemInContainer(container);
    } else{
        closeEveryItemInContainer(container);
        openItem2(item);
    }
});

$(".colour__close").on("click", e =>{
    e.preventDefault();

    closeEveryItemInContainer($(".colours-menu"));
})