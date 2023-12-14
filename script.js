$(document).ready(function (){
    $("#dm").on("click", function(){
        if($(this).prop("checked")){
            // Checked state
            $("header, footer, body").css({"color": "black"});
            $("header").css({"background-color": "lightblue"});
            $("footer").css({"background-color": "lightblue"});
            $("body").css({"background-color": "lightblue"});
            $("#dm_label").html("&#x2601;"); // Cloud icon
        } 
        else {
            // Unchecked state
            $("header, footer, body").css({"color": "black"});
            $("header").css({ "background-color": "lightgray"});
            $("footer").css({"background-color": "lightgray"});
            $("body").css({"background-color": "lightgray"});
            $("#dm_label").html("&#x2600;"); // Sun icon
        }
    });

    const currentTime = new Date().getHours();
    if(currentTime >= 6 && currentTime < 18) {
        $("body").css("background-color", "#fffacd");
    } 
    else{
        $("body").css("background-color", "#191970");
    }

    $("#mybutton").hover(
        function () {
            $(this).text("Click Me");
        },
        function () {
           $(this).text("Hover Over Me");
        }
    );

    $("#mybutton").on("click", function(){
        alert("Button clicked!");
    });
});