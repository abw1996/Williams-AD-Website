// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
var wrenchCount = 1;
var wrenchBool = false;

$(window).resize(function () {
    var height = $("#navbar").height();
    $(".height-set").height(height + 23);
});

$(document).ready(function () {
    var height = $("#navbar").height();
    $(".height-set").height(height + 23);
    const scroller = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });
});


$("#wrench").hover(function () {
    if (wrenchBool == false) {
        omg();
        console.log("wrench hover");
    }
   });

function omg() {
    wrenchBool = true;
    console.log("omg");
    wrenchCount++;
    if (wrenchCount > 18) {
        wrenchCount = 1;
        turnWrench();
        wrenchBool = false;
    } else {
        turnWrench();
        setTimeout(function () {
            omg();

        }, 70);
    }
 
}




function turnWrench() {
    if (wrenchCount < 10) {
        $("#wrench").attr("src", "assets/Wrench Animation/Wrench animated000" + wrenchCount.toString() + ".svg");
        console.log(wrenchCount);
    } else {
        $("#wrench").attr("src", "assets/Wrench Animation/Wrench animated00" + wrenchCount.toString() + ".svg");
        console.log(wrenchCount);
    }
}

$("#loginSubmit").click(function () {
    $("#failed-login-message").css("visibility", "visible");
})



