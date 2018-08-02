$(document).ready(function() {
    console.log('hello');
    $('#checkbox').click(function(){
        militaryTime = 1 - militaryTime;
    });

    dayOfTheWeek();
    displayTime();
    setInterval(function() {
        displayTime();
        
    }, 1000);

    $.ajax( {
        url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        success: function(data) {
            var post = data.shift(); // The data is an array of posts. Grab the first one.
            $('#quote-author').text(post.title);
            $('#quote-content').html(post.content);
        },
        cache: false
    });
});

var militaryTime = 0;
var hour;

function displayTime() {
    var date  = new Date();
    var hour  = date.getHours().toString();
    var min   = date.getMinutes().toString();

    if(min.length === 1) {
        min = '0' + min;
    };

    // clears out old time
    $('#hour').empty();
    $('#min').empty(); 
    $('#am-pm').empty();

    // updates new time
    $('#hour').text(hour); 
    $('#min').text(min);

    // determines whether is it am or pm
    if(hour < 12) {
        $('#am-pm').append(' AM');
    } else {
        $('#am-pm').append(' PM');
    }

    if(!militaryTime) {
        removeMilitaryTime(hour);
    }
};

function removeMilitaryTime(hour) {
    hour = parseInt(hour);
    switch(hour) {
        case 13:
            hour = 1;
            break;
        case 14:
            hour = 2;
            break;
        case 15:
            hour = 3;
            break;
        case 16:
            hour = 4;
            break;
        case 17:
            hour = 5;
            break;
        case 18:
            hour = 6;
            break;
        case 19: 
            hour = 7;
            break;
        case 20:
            hour = 8;
            break;
        case 21:
            hour = 9;
            break;
        case 22:
            hour = 10;
            break;
        case 23:
            hour = 11;
            break;
        case 24:
            hour = 12;
            break;
    }
    $('#hour').empty();
    $('#hour').text(hour);
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