//  All CSS imports
import "./App.css";
import "./components/css/startButton.css";
import "./components/css/cardStyle.css";
import "./components/css/mainContainer.css";

// all app component imports

// Board handles everything when the game is running and returns a Board component
import Board from "./components/board";

// GameStart is the initial view the user will have when loading our page
import GameStart from "./components/gameStart";

// All other imports
import { useState } from "react";

function App() {
  // Create destructured useState to keep track of where the user wants to be
  const [showStartGame, setShowStartGame] = useState(true);

  const toggleGameBoard = () => {
    setShowStartGame(!showStartGame);
  };

  //  When making edits to the program you want to only make edits to GameStart for the main page and Board for the game board itself.
  //  Try not to make edits below here unless we need additional "pages" but currently we are doing a single page App. 
  return (
    <>
      <main className="mainContainer">
        <section className="card">
          {/* This like checks for showStartGame to be true or false. Then renders either GameStart if True and Board if false */}
          {showStartGame ? <GameStart /> : <Board />}

          {/* The main button on the screen. We can add more if needed */}
          <div className="buttons">
            {/* toggleGameBoard changes the state of showStartGame to the opposite of what is currently is. So if its true, make it false. */}
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

export default App;
