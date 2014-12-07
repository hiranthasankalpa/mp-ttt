<%@ page import="server.MainServer" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>TTT</title>
    <link rel="stylesheet" type="text/css" href="styles/main.css"/>

    <script src="scripts/jquery-1.11.1.js"></script>
    <script src="scripts/main.js"></script>
</head>
<body>

<h3 class="message"><%=MainServer.getMessage()%></h3>

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

</body>
</html>
