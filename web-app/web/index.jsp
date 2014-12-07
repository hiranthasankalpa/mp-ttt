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
        <h1>This is a test</h1>
        <h3 class="message"><%=MainServer.getMessage()%></h3>
  </body>
</html>
