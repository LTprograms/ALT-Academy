$(document).ready(function () {
    effectImgHover();
});
function effectImgHover() {
    $(".links-sect img").hover(function () {
        let name = $(this).attr("src");
        name = name.replace("png", "gif");
        $(this).attr("src", name);   
    }, function () {
        let name = $(this).attr("src");
        name = name.replace("gif", "png");
        $(this).attr("src", name); 
    });
}