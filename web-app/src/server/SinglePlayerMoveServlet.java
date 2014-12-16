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
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/singlePlayerMove/*")
public class SinglePlayerMoveServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws javax.servlet.ServletException, IOException {

        List<String> list = new ArrayList<String>();


        String param = request.getParameter("board");

        int board[][] = new int[3][3];

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

        int bestMove [];
        if(isAPlayerWon == 0 && freeCells != 0) {
            bestMove = GameTree.getBestMove(board);

            board[bestMove[0]][bestMove[1]] = 1;
            isAPlayerWon = Util.isAPlayerWon(board);
            freeCells = Util.getNoOfFreeCells(board);
        } else {
            bestMove = new int[] {-1,-1};
        }

        list.add(isAPlayerWon + "");
        list.add(freeCells + "");
        list.add((bestMove[0]*3 + bestMove[1] + 1) + "");

        Gson gson = new GsonBuilder().create();
        String json = gson.toJson(list);

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write(json);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        List<String> list = new ArrayList<String>();
        list.add("item1");
        list.add("item2");
        list.add("item3");

        Gson gson = new GsonBuilder().create();
        String json = gson.toJson(list);

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write(json);
    }
}
