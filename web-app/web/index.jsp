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

    <h1><%=MainServer.getMessage()%></h1>

    <div class="col-xs-12"><button type="button" class="btn btn-default btn-primary col-xs-offset-4 col-xs-4" id="checkWinner">Check Winner</button></div><br><br>
    <div class="col-xs-12"><button type="button" class="btn btn-default btn-primary col-xs-offset-4 col-xs-4" id="startGame">Start Game</button></div><br><br>

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

<div class="modal fade" id="gamePrompt">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Select the type of game you want to start</h4>
            </div>
            <div class="modal-body" id="modal-body">
                <div style="height: 115px">
                    <button type="button" class="btn btn-default btn-primary col-xs-offset-4 col-xs-4" id="singlePlayer">Single Player</button><br><br>
                    <button type="button" class="btn btn-default btn-primary col-xs-offset-4 col-xs-4" id="multiPlayer">Multi Player</button><br><br>
                    <button type="button" class="btn btn-default btn-primary col-xs-offset-4 col-xs-4" id="overNetwork">Over the Network</button><br><br>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
            </div>
        </div>
    </div>
</div>

</body>
</html>
