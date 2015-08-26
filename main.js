$(document).ready(main);
var $louiElement = $(".logo");
var requestId;

function main() {
    $(window).on("scroll", cloneLoui);
    setTimeout(stopAnimation, 3000);
    

}

function cloneLoui() {

    for(var i=0; i<5; i++) {
    var $clone = $louiElement.clone()
        .css({
            left: Math.random() * 100 + "%",
            right: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            margin: "10px"
        }).attr("id", null).hide();

    $("body").append($clone);
    $clone.fadeIn(100);
    $clone.fadeOut(1000);
    }
}
requestId = window.requestAnimationFrame(cloneLoui);

function stopAnimation() { 
    window.cancelAnimationFrame(requestId);
    console.log(requestId);

}

function removeLoui() {
    $(".logo").remove();

}
