// const Board = () => {
//   return (
//     <>
//     {/* We need to add a table here that looks like a checker board */}
//       <h1>Heres the Board</h1>
//     </>
//   );
// };
// 
// export default Board;
import Reach, { useState } from "react";
import "./css/boardStyle.css";
import "./css/checkerPiece.css";

function Board() {
  const boardSize = 8;

  // Create a square element, passing in the current index it is created at
  const renderSquare = (row, column) => {
    console.log(column, row)
    //Check current square index if its odd, make it beige. If its even make it charcoal
    const isBlack = (row + column) % 2 === 1;
    const color = isBlack ? "#28231D" : "#eeeed2";

    return (
      <div
      // assign keys so we can easily grab squares when needed
      // TODO: add an onclick feature that allows us to select the child (checker piece) of our square, so that we can move that piece.
        key={`${row}-${column}`}
        style={{
          width: "45px",
          height: "45px",
          backgroundColor: color,
        }}
      />
    );
  };

  const renderBoard = () => {
    const board = [];
    // for each column, create a row that will hold our squares
    for (let i = 0; i < boardSize; i++) {
      const row = [];
      // push each rendered square into our row array
      for (let j = 0; j < boardSize; j++) {
        row.push(renderSquare(i, j));
      }
      // Push each row into the Board, creating our checkerboard, and make it display as flex
      board.push(
        <div key={i} style={{ display: 'flex' }}>
          {row}
        </div>
      );
    }
    return board;
  };

  return (
    <div>
      {renderBoard()}
    </div>
  );
}

export default Board;