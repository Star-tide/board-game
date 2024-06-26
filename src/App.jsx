import './App.css'
import './components/css/startButton.css'
import './components/css/cardStyle.css'
import './components/css/mainContainer.css'
import Board from "./components/board"
import GameStart from "./components/gameStart"
import { useState } from "react"

function App() {

    const [showStartGame, setShowStartGame] = useState(true);

    const toggleGameBoard = () => {
      setShowStartGame(!showStartGame);
    };

  return (
    <>
      <main className="mainContainer">
        <section className="card">
          {showStartGame ? <GameStart /> : <Board />}
          <div className="buttons">
            <button onClick={toggleGameBoard} className="btn">
              <span></span>
              <p
                data-text={showStartGame ? "start!" : "return"}
                data-title={showStartGame ? "new game" : "main menu"}
              ></p>
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App
