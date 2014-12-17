package server;

import gui.BoardMap;

import java.util.ArrayList;
import java.util.List;

public class MainServer {

    private static List<BoardMap> list = null;

    public static String getMessage() {
        return "Hello, world!";
    }

    public static int playerConnect () {

        if (list == null) {
            list = new ArrayList<BoardMap>();
            return createMapAndGetId();
        } else {
            int id = list.size()-1;
            if (list.get(id).getPlayersSet() == 1) {
                BoardMap map = list.get(id);
                map.setPlayersSet(2);
                map.setTurn(1);
                setMapFromId(id, map);
                return id;
            } else {
                return createMapAndGetId();
            }
        }

    }

    public static int createMapAndGetId() {
        BoardMap map = new BoardMap();
        int id = list.size();
        map.setId(id);
        list.add(map);
        return id;
    }

    public static BoardMap getMapFromId(int id) {
        return list.get(id);
    }

    public static void setMapFromId (int id, BoardMap map) {
        list.set(id, map);
    }

    public static void makeMoveFromId (int id, int player, int[] move) {
        BoardMap map = list.get(id);
        if (map.getTurn() == player) {
            if (map.board[move[0]][move[1]] == 0) {
                map.board[move[0]][move[1]] = player;
                map.setTurn(-player);
                list.set(id, map);
            }
        }
    }
}
