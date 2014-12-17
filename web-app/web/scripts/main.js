var singlePlayerUrl = 'singlePlayerMove';
var multiPlayerUrl = 'multiPlayerMove';
var onlinePlayerUrl = 'onlinePlayerMove';
var onlinePlayerConnectUrl = 'onlinePlayerConnect';

board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
gameType = 'NotSet';
myTurn = false;
nowTrun = 0;

gameId = -1;
player = 0;
interval = '';

$(function() {
    $('.common').hide();

    $(document).on('click', '.box', boxClicked);
    $(document).on('click', '.newGame', newGame);
    $(document).on('click', '#singlePlayer', startSinglePlayer);
    $(document).on('click', '#multiPlayer', startMultiPlayer);
    $(document).on('click', '#onlinePlayer', startOnlinePlayer);
    $(document).on('click', '#iWill', iWill);
    $(document).on('click', '#letComputer', letComputer);

    $('#gamePrompt').modal('toggle');

});

var startOnlinePlayer = function () {
    gameType = "Online";
    resetBoard();
    onlinePlayerConnect();
};

var pollState = function () {
    onlinePlayerMove(-1);
};

var onlinePlayerMove = function (move) {

    var data = gameId + " " + player + " " + Math.floor((move-1)/3) + " " + ((move-1)%3);

    var request = $.ajax({
        url: onlinePlayerUrl,
        type: "POST",
        data: {
            'move': data
        }
    });

    request.done(function (msg) {
        var isAPlayerWon = msg[0];
        var freeCells = msg[1];
        var turn = msg[2];
        var board = msg[3];

        if (isAPlayerWon != 0) {
            if (isAPlayerWon == 1){
                $('#gameStateText').text('"X" Won!');
                $('#gameState').modal('toggle');
                clearInterval(interval);
            } else if (isAPlayerWon == -1) {
                $('#gameStateText').text('"O" Won!');
                $('#gameState').modal('toggle');
            }
            nowTrun = 0;
            gameType = 'NotSet';
            clearInterval(interval);
        } else if (freeCells == 0) {
            $('#gameStateText').text('Game Drawn!');
            $('#gameState').modal('toggle');
            nowTrun = 0;
            gameType = 'NotSet';
            clearInterval(interval);
        } else if (turn == player) {
            myTurn = true;
        }

        var map = board.split(" ");
        for (var i=0; i<9; i++) {
            if (map[i] == -1) {
                draw(i+1,'o');
            } else if (map[i] == 1) {
                draw(i+1,'x');
            }
        }
    });

    request.fail(function (jqXHR, textStatus) {
        alert("Oops, error occured!");
        newGame();
    });
};

var onlinePlayerConnect = function () {

    var request = $.ajax({
        url: onlinePlayerConnectUrl,
        type: "POST"
    });

    request.done(function (msg) {
        gameId = msg[0];
        player = msg[1];
        var turn = msg[2];

        console.log("id: "+gameId+"\nplayer: "+player+"\nturn: "+turn);
        myTurn = true;

        interval = setInterval(pollState, 2000);
    });

    request.fail(function (jqXHR, textStatus) {
        alert("Oops, error occured!");
        newGame();
    });
};

var boxClicked = function () {
    if(myTurn){
        myTurn = false;
        var box = this.id;

        var boardStr = '';

        if (gameType == "SinglePlayer") {
            if (board[box-1] == 0) {
                draw(box, 'x');
                board[box-1] = -1;

                for(var i=0; i<9; i++){
                    boardStr += board[i] + " ";
                }

                singlePlayerMove(boardStr);
            } else {
                myTurn = true;
            }
        } else if (gameType == "MultiPlayer") {
            if (board[box-1] == 0) {
                if (nowTrun == 1) {
                    draw(box, 'x');
                    board[box-1] = 1;
                    nowTrun = -1;
                } else {
                    draw(box, 'o');
                    board[box-1] = -1;
                    nowTrun = 1;
                }

                for(var j=0; j<9; j++){
                    boardStr += board[j] + " ";
                }

                multiPlayerMove(boardStr);
            } else {
                myTurn = true;
            }
        } else if (gameType == "Online") {
            if (board[box-1] == 0) {
                onlinePlayerMove(box);
            } else {
                myTurn = true;
            }
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