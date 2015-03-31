var widget1 = SC.Widget("so");

$(function(){
    $("#playSound").click(function() {
        widget1.play();

    });

    $("#stopSound").click(function() {
        widget1.pause()
    });
})