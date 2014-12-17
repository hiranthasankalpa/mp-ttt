<%@ page import="server.MainServer" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>TTT</title>
    <link rel="stylesheet" type="text/css" href="styles/main.css"/>
    <link rel="stylesheet" type="text/css" href="styles/bootstrap.css"/>
    <link rel="stylesheet" type="text/css" href="styles/bootstrap-theme.css"/>

    <script src="scripts/jquery-1.11.1.js"></script>
    <script src="scripts/bootstrap.js"></script>
    <script src="scripts/main.js"></script>
</head>
<body>
<div class="content">

    <h1>Tic Tac Toe</h1>

    <%--<%=MainServer.getMessage()%>--%>

    <div class="col-xs-12"><button type="button" class="btn btn-default btn-primary col-xs-offset-4 col-xs-4 newGame">New Game</button></div><br><br>

    <table id="board">
        <tr>
            <td id="1" class="box"><img class="o common" src="images/0.png"><img class="x common" src="images/x.png"></td>
            <td id="2" class="box"><img class="o common" src="images/0.png"><img class="x common" src="images/x.png"></td>
            <td id="3" class="box"><img class="o common" src="images/0.png"><img class="x common" src="images/x.png"></td>
        </tr>
        <tr>
            <td id="4" class="box"><img class="o common" src="images/0.png"><img class="x common" src="images/x.png"></td>
            <td id="5" class="box"><img class="o common" src="images/0.png"><img class="x common" src="images/x.png"></td>
            <td id="6" class="box"><img class="o common" src="images/0.png"><img class="x common" src="images/x.png"></td>
        </tr>
        <tr>
            <td id="7" class="box"><img class="o common" src="images/0.png"><img class="x common" src="images/x.png"></td>
            <td id="8" class="box"><img class="o common" src="images/0.png"><img class="x common" src="images/x.png"></td>
            <td id="9" class="box"><img class="o common" src="images/0.png"><img class="x common" src="images/x.png"></td>
        </tr>
    </table>

</div>

<div class="modal fade" data-backdrop="static" data-keyboard="false" id="gamePrompt">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Select the type of game you want to start</h4>
            </div>
            <div class="modal-body">
                <div style="height: 115px">
                    <button type="button" class="btn btn-default btn-primary col-xs-offset-4 col-xs-4" id="singlePlayer" data-dismiss="modal">Single Player</button><br><br>
                    <button type="button" class="btn btn-default btn-primary col-xs-offset-4 col-xs-4" id="multiPlayer" data-dismiss="modal">Multi Player</button><br><br>
                    <button type="button" class="btn btn-default btn-primary col-xs-offset-4 col-xs-4" id="onlinePlayer" data-dismiss="modal">Play Onlinek</button><br><br>
                    <br><button type="button" class="btn btn-default btn-primary col-xs-offset-4 col-xs-4" data-dismiss="modal">Close</button><br><br>
                </div>
            </div>
            <div class="modal-footer">
            </div>
        </div>
    </div>
</div>

<div class="modal fade" data-backdrop="static" data-keyboard="false" id="gameState">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="gameStateText"></h4>
            </div>
            <div class="modal-body">
                <div style="height: 35px">
                    <button type="button" class="btn btn-default btn-primary col-xs-offset-4 col-xs-4 newGame" data-dismiss="modal">New Game</button><br><br>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" data-backdrop="static" data-keyboard="false" id="playerPrompt">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body">
                <div style="height: 75px">
                    <button type="button" class="btn btn-default btn-primary col-xs-offset-4 col-xs-4" data-dismiss="modal" id="iWill">I will start</button><br><br>
                    <button type="button" class="btn btn-default btn-primary col-xs-offset-4 col-xs-4" data-dismiss="modal" id="letComputer">Let the Computer start</button><br><br>
                </div>
            </div>
        </div>
    </div>
</div>

</body>
</html>
