$(document).ready(function() {

    // For Sign up for Drivers Button and functionality
    $('.modal').modal();
    $(".button-collapse").sideNav();
    $('#stp-one').on('click', function(e) {
        e.preventDefault();
        $('.signup-driver ul.tabs').tabs({ swipeable: true });
        $('.tb-b').removeClass('disabled');
        $('.tb-c').removeClass('disabled');
        $('ul.tabs').tabs('select_tab', 'test2');

    });
    // $('#test2 #step-two').click(function() {
    //     console.log("found");
    // });
    $('#step-two').click(function(e) {
        e.preventDefault();
        console.log("why");
        $('#test2').removeClass('active');
        $('#test3').addClass('active');
        $('.signup-driver ul.tabs').tabs({ swipeable: true });
        $('ul.tabs').tabs('select_tab', 'test3');
        // $('.tb-c').addClass('active');
        // $('ul.tabs').tabs('swipeable', true);
    });

});