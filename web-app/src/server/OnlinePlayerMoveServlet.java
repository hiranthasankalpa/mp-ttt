package server;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import gui.BoardMap;
import gui.GameTree;
import gui.Util;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/onlinePlayerMove/*")
public class OnlinePlayerMoveServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws javax.servlet.ServletException, IOException {

        List<String> list = new ArrayList<String>();

        int board[][];
        String param = request.getParameter("move");
        String parts[] = param.split(" ");

        int id = Integer.parseInt(parts[0]);
        int player = Integer.parseInt(parts[1]);
        int[] move = {Integer.parseInt(parts[2]), Integer.parseInt(parts[3])};

        if (move[0] >= 0) {
            MainServer.makeMoveFromId(id, player, move);
        }

        BoardMap map = MainServer.getMapFromId(id);
        board = map.board;

        int isAPlayerWon = Util.isAPlayerWon(board);
        int freeCells = Util.getNoOfFreeCells(board);

        String mapStr = "";

        for (int i=0; i<3; i++) {
            for (int j=0; j<3; j++) {
                mapStr += board[i][j] + " ";
            }
        }

        list.add(isAPlayerWon + "");
        list.add(freeCells + "");
        list.add(map.getTurn() +"");
        list.add(mapStr);

        Gson gson = new GsonBuilder().create();
        String json = gson.toJson(list);

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write(json);
    }

}
