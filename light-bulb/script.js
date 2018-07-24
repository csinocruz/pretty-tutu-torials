$(document).ready(function() {
    $('button').click(function() {
        audio.play();
    });
    $('#on-button').click(function() {
        handleOnButton();
    });
    $('#off-button').click(function() {
        handleOffButton();
    });
});

var audio = new Audio('click.mp3');

function handleOnButton(){
    console.log('ON');
    $('#light-on').addClass('visible');
    $('#light-off').removeClass('visible');
    $('#light-off').addClass('hidden');
};

function handleOffButton(){
    console.log('OFF');
    $('#light-off').addClass('visible');
    $('#light-on').removeClass('visible');
};