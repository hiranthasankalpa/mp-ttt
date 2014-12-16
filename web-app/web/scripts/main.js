var singlePlayerUrl = 'singlePlayerMove';
var multiPlayerUrl = 'multiPlayerMove';

board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
gameType = 'NotSet';
myTurn = false;
nowTrun = 0;

$(function() {
    $('.common').hide();

    $(document).on('click', '.box', boxClicked);
    $(document).on('click', '.newGame', newGame);
    $(document).on('click', '#singlePlayer', startSinglePlayer);
    $(document).on('click', '#multiPlayer', startMultiPlayer);
    $(document).on('click', '#iWill', iWill);
    $(document).on('click', '#letComputer', letComputer);

    $('#gamePrompt').modal('toggle');

});

var boxClicked = function () {
    if(myTurn){
        myTurn = false;
        var box = this.id;

        if (gameType == "SinglePlayer") {
            draw(box, 'x');
            board[box-1] = -1;
        } else if (gameType == "MultiPlayer") {
            if (nowTrun == 1) {
                draw(box, 'x');
                board[box-1] = 1;
                nowTrun = -1;
            } else {
                draw(box, 'o');
                board[box-1] = -1;
                nowTrun = 1;
            }
        }

        var boardStr = '';
        for(var i=0; i<9; i++){
            boardStr += board[i] + " ";
        }
        if (gameType == "SinglePlayer") {
            singlePlayerMove(boardStr);
        } else if (gameType == "MultiPlayer") {
            multiPlayerMove(boardStr);
        }

    } else if (gameType == "NotSet") {
        $('#gamePrompt').modal('toggle');
    }
};

var multiPlayerMove = function (boardStr) {
    var request = $.ajax({
        url: multiPlayerUrl,
        type: "POST",
        data: {
            'board': boardStr
        }
    });

    request.done(function (msg) {
        var isAPlayerWon = msg[0];
        var freeCells = msg[1];

        if (isAPlayerWon != 0) {
            if (isAPlayerWon == 1){
                $('#gameStateText').text('"X" Won!');
                $('#gameState').modal('toggle');
            } else if (isAPlayerWon == -1) {
                $('#gameStateText').text('"O" Won!');
                $('#gameState').modal('toggle');
            }
            nowTrun = 0;
            gameType = 'NotSet';
        } else if (freeCells == 0) {
            $('#gameStateText').text('Game Drawn!');
            $('#gameState').modal('toggle');
            nowTrun = 0;
            gameType = 'NotSet';
        } else {
            myTurn = true;
        }
    });

    request.fail(function (jqXHR, textStatus) {
        alert("Oops, error occured!");
        newGame();
    });
};

var startMultiPlayer = function () {
    gameType = "MultiPlayer";
    resetBoard();
    nowTrun = 1;
    myTurn = true;
};

var resetBoard = function () {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    $('.common').hide();
};

var newGame = function () {
    $('#gamePrompt').modal('toggle');
};

var startSinglePlayer = function () {
    gameType = "SinglePlayer";
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
        url: singlePlayerUrl,
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
                $('#gameStateText').text('You Lost!');
                $('#gameState').modal('toggle');
            } else if (isAPlayerWon == -1) {
                $('#gameStateText').text('You Won!');
                $('#gameState').modal('toggle');
            }
            gameType = 'NotSet';
        } else if (freeCells == 0) {
            $('#gameStateText').text('Game Drawn!');
            $('#gameState').modal('toggle');
            gameType = 'NotSet';
        } else {
            myTurn = true;
        }
    });

    request.fail(function (jqXHR, textStatus) {
        alert("Oops, error occured!");
        newGame();
    });
};

var draw = function (location, value) {
    $('#'+location+' .common').hide();
    $('#'+location+' .'+value).show();
};