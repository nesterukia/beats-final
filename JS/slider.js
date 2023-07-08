var value = 0;
var indx = 0;
var listLength = $(".slide").length;
$(".shop-section__left-button").click(e =>{
    const slide = $(".slide");
    let step = slide.eq(indx).width();
    if (value < 0) {
        value += step;
        indx-=1;
        for(let i = 0; i < listLength; i++){
            let valueStr = 'translateX(' + value.toString() + 'px)';
            slide.eq(i).css('transform', valueStr);
        }
    }
});
$(".shop-section__right-button").click(e =>{
    const slide = $(".slide");
    let step = slide.eq(indx).width();
    if (value > -(listLength - 1) * step) {
        value -= step;
        indx+=1;
        for(let i = 0; i < listLength; i++){
            let valueStr = 'translateX(' + value.toString() + 'px)';
            slide.eq(i).css('transform', valueStr);
        }
    }
});