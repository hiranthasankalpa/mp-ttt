package server;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import gui.BoardMap;
import gui.Util;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/onlinePlayerConnect/*")
public class OnlinePlayerConnectServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws javax.servlet.ServletException, IOException {

        List<String> list = new ArrayList<String>();

        int id = MainServer.playerConnect();
        int playerNumber;

        BoardMap map = MainServer.getMapFromId(id);

        if (map.getPlayersSet()==1) {
            playerNumber = 1;
        } else {
            playerNumber = -1;
        }

        list.add(id + "");
        list.add(playerNumber + "");
        list.add(map.getTurn() + "");

        Gson gson = new GsonBuilder().create();
        String json = gson.toJson(list);

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write(json);
    }

}
