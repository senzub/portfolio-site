
$("#arrowAboutBtn").click(function(e) {
	e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#about").offset().top - 111
    }, 2000);
});

$("#aboutBtn").click(function(e) {
	e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#about").offset().top - 111
    }, 2000);
});

$("#skillsBtn").click(function(e) {
	e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#skills").offset().top - 111
    }, 2000);
});


$("#projectsBtn").click(function(e) {
	e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#projects").offset().top - 111
    }, 2000);
});


$("#contactBtn").click(function(e) {
	e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#contact").offset().top - 111
    }, 2000);
});






$(window).scroll(function() {
    $('video').each(function() {
        if ($(this).visible(true)) {
            $(this)[0].play();
        } else {
            $(this)[0].pause();
        }
    })
});