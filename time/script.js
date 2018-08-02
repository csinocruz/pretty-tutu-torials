$(document).ready(function() {
    console.log('hello');
    dayOfTheWeek();
    displayTime();
    setInterval(function() {
        displayTime();
        
    }, 1000);
});

var hour;

function displayTime() {
    var date  = new Date();
    var hour  = date.getHours().toString();
    var min   = date.getMinutes().toString();

    if(min.length === 1) {
        min = '0' + min;
    };

    $('#time').empty();
    $('#time').append(hour+':'+min);
    handleAmPm(hour);
};

function handleAmPm(hour) {
    if(hour < 12) {
        $('#time').append(' AM');
    } else {
        $('#time').append(' PM');
    }
};

function dayOfTheWeek() {
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }
    $('#day').text(day);
};
