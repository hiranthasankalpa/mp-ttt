var service_url = 'http://localhost:8080/singlePlayerMove';

board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

myTurn = false;

$(function() {
    $('.common').hide();

    $(document).on('click', '.box', boxClicked);
    $(document).on('click', '.newGame', newGame);
    $(document).on('click', '#singlePlayer', startSinglePlayer);
    $(document).on('click', '#iWill', iWill);
    $(document).on('click', '#letComputer', letComputer);

    $('#gamePrompt').modal('toggle');

});

var boxClicked = function () {
    if(myTurn){
        myTurn = false;
        var box = this.id;
        draw(box, 'x');
        board[box-1] = -1;

        var boardStr = '';
        for(var i=0; i<9; i++){
            boardStr += board[i] + " ";
        }
        singlePlayerMove(boardStr);
    } else {
        $('#gamePrompt').modal('toggle');
    }
};

var resetBoard = function () {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    $('.common').hide();
};

var newGame = function () {
    $('#gamePrompt').modal('toggle');
};

var startSinglePlayer = function () {
    resetBoard();
    $('#playerPrompt').modal('toggle');
};

var iWill = function () {
    myTurn = true;
};

var letComputer = function () {
    myTurn = false;

    var boardStr = '';
    for(var i=0; i<9; i++){
        boardStr += board[i] + " ";
    }
    singlePlayerMove(boardStr);
};

var singlePlayerMove = function (boardStr) {
    var request = $.ajax({
        url: service_url,
        type: "POST",
        data: {
            'board': boardStr
        }
    });

    request.done(function (msg) {
        var isAPlayerWon = msg[0];
        var freeCells = msg[1];
        var move = msg[2];

        draw(move, 'o');
        board[move-1] = 1;

        if (isAPlayerWon != 0) {
            if (isAPlayerWon == 1){
                $('#gameStateText').text('You Lost');
                $('#gameState').modal('toggle');
            } else if (isAPlayerWon == -1) {
                $('#gameStateText').text('You Won');
                $('#gameState').modal('toggle');
            }
        } else if (freeCells == 0) {
            $('#gameStateText').text('Game Drawn');
            $('#gameState').modal('toggle');
        } else {
            myTurn = true;
        }
    });

    request.fail(function (jqXHR, textStatus) {
    });
};

var draw = function (location, value) {
    $('#'+location+' .common').hide();
    $('#'+location+' .'+value).show();
};