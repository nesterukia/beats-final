const ddButton = document.querySelectorAll('.dropdown');
const ddContent = document.querySelectorAll('.dropdown__content');

for (let i=0; i < ddButton.length; i++){
    ddButton[i].addEventListener('mouseover', function(){
        ddContent[i].style.opacity = '1';
    })
    ddButton[i].addEventListener('mouseout', function(){
        ddContent[i].style.opacity = '0';
    })
}
