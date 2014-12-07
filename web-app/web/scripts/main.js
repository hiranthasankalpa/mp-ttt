var service_url = 'http://localhost:8080/someservlet';

$(function() {
    console.log( "ready!" );
    testFunc();

    $('.common').hide();

    draw(5, 'x');
    draw(6, 'o');

    $(document).on('click', '.box', boxClicked);
    $(document).on('click', '#checkWinner', checkWinner);
    $(document).on('click', '#startGame', startGame);

});

var startGame = function () {
    $('#gamePrompt').modal('toggle');
};

var checkWinner = function () {

};

var boxClicked = function () {
    console.log(this.id);
};

var draw = function (location, value) {
    $('#'+location+' .common').hide();
    $('#'+location+' .'+value).show();
};

var testFunc = function () {
    var request = $.ajax({
        url: service_url,
        type: "POST",
        data: {
            'call': 'getAllUserGroups'
        }
    });

    request.done(function (msg) {
        console.log(msg);
    });

    request.fail(function (jqXHR, textStatus) {
    });
};