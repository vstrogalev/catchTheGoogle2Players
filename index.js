import { subscribe } from "./data/state-manager.js";
import { AppComponent } from "./ui/App.component.js";
import { bindKeyboardsControlForMovePlayer1, bindVoiceRecognitionForMovingPlayer2 } from "./ui/controls.js";

const rootElement = document.getElementById('root');

function renderApp() {
    rootElement.innerHTML = '';

    const appElement = AppComponent();

    rootElement.append(appElement);
}

renderApp();

bindKeyboardsControlForMovePlayer1();

bindVoiceRecognitionForMovingPlayer2();

subscribe(renderApp);
