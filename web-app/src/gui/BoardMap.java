package gui;

public class BoardMap {

    public int board[][] = new int[3][3];
    private int id;
    private int turn;
    private int playersSet;

    public BoardMap () {
        for (int i=0; i<3; i++) {
            for (int j=0; j<3; j++) {
                board[i][j] = 0;
            }
        }
        turn = 0;
        playersSet = 1;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getTurn() {
        return turn;
    }

    public void setTurn(int turn) {
        this.turn = turn;
    }

    public int getPlayersSet() {
        return playersSet;
    }

    public void setPlayersSet(int playersSet) {
        this.playersSet = playersSet;
    }
}
