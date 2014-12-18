package gui;

import java.util.TimerTask;

public class PollingTimer extends TimerTask {

    GameGUI gui;

    public PollingTimer(GameGUI gui) {
        this.gui = gui;
    }


    public void run() {
        gui.makeMove(-1, -1);
        gui.checkStatusOfGameOP();
        System.out.println("Time's up!");
        if(gui.turnOP == 0 && Util.getNoOfFreeCells(gui.board) == 9) {
            gui.setMessageText("Waiting for another player...");
        } else if(gui.turnOP == gui.playerOP) {
            gui.setMessageText("It's your turn");
        } else if(gui.turnOP == (-gui.playerOP)) {
            gui.setMessageText("It's your opponent's turn");
        }
    }
}