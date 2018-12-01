/*function onMouseRoll(image){
    image.src = "img/likehover.png";
}

function onMouseOut(image){
    image.src = "img/like.png"
}*/

function onMouseHover(image, action){
    if(action == 1)
    {
        image.src = "img/likehover.png";
    }
    else
    {
        image.src = "img/like.png";
    }

}