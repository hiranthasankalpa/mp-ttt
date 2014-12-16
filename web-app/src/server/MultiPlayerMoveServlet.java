package server;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import gui.GameTree;
import gui.Util;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/multiPlayerMove/*")
public class MultiPlayerMoveServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws javax.servlet.ServletException, IOException {

        List<String> list = new ArrayList<String>();

        int board[][] = new int[3][3];
        String param = request.getParameter("board");
        String parts[] = param.split(" ");

        for (int i=0; i<3; i++) {
            for (int j=0; j<3; j++) {
                board[i][j] = Integer.parseInt(parts[3*i+j]);
                //System.out.print( board[i][j] + " ");
            }
            //System.out.println();
        }

        int isAPlayerWon = Util.isAPlayerWon(board);
        int freeCells = Util.getNoOfFreeCells(board);

        list.add(isAPlayerWon + "");
        list.add(freeCells + "");

        Gson gson = new GsonBuilder().create();
        String json = gson.toJson(list);

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write(json);
    }

}
