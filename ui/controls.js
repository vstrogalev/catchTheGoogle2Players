import { DIRECTIONS } from "../data/constants.js"
import { movePlayer } from "../data/state-manager.js"

export function bindKeyboardsControlForMovePlayer1() {
    // window = publisher/subject
    window.addEventListener("keyup", 
    // listener/subscriber/observer/handler/consumer = function/callback    
    (event) => {
        switch(event.code) {
            case "ArrowUp": {
                movePlayer(1, DIRECTIONS.UP)
                break;
            }
             case "ArrowDown": {
                movePlayer(1, DIRECTIONS.DOWN)
                break;
            } 
            case "ArrowLeft": {
                movePlayer(1, DIRECTIONS.LEFT)
                break;
            }
            case "ArrowRight": {
                movePlayer(1, DIRECTIONS.RIGHT)
                break;
            }
        }
    })
} 

export function bindVoiceRecognitionForMovingPlayer2() { 
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-US';
    
    recognition.onresult = function(event) {
        for (let i = event.resultIndex; i < event.results.length; i++) {
            const result = event.results[i];
            if (result.isFinal) {
                const transcript = result[0].transcript.trim().toLowerCase();
                const words = transcript.split(/\s+/);
    
                words.forEach(word => {
                    switch (word) {
                        case DIRECTIONS.UP:
                            movePlayer(2, DIRECTIONS.UP);
                            break;
                        case DIRECTIONS.DOWN:
                            movePlayer(2, DIRECTIONS.DOWN);
                            break;
                        case DIRECTIONS.LEFT:
                            movePlayer(2, DIRECTIONS.LEFT);
                            break;
                        case DIRECTIONS.RIGHT:
                            movePlayer(2, DIRECTIONS.RIGHT);
                            break;
                    }
                });
            }
        }
    };
    
    recognition.onerror = function(event) {
        console.error('Speech recognition error', event);
    };
    
    recognition.onend = function() {
        recognition.start();
    };
    
    recognition.start();
    
}
