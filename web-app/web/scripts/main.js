var service_url = 'http://localhost:8080/someservlet';

$(function() {
    console.log( "ready!" );
    testFunc();
});

var testFunc = function () {
    var request = $.ajax({
        url: service_url,
        type: "POST",
        data: {
            'call': 'getAllUserGroups'
        }
    });

    request.done(function (msg) {
    });

    request.fail(function (jqXHR, textStatus) {
    });
};