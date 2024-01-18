import { winner_combos } from "../constants";

export const checkWinnerFrom = (boardToCheck) => {
  //se revisa todas las combinaciones para ver si X u O ha ganado
  for (const combo of winner_combos) {
    const [a, b, c] = combo;
    if (
      //si a es igual a b y a es igual a c hay ganador
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  return null;
};

export const checkEndGame = (newBoard) => {
    //revisa todas las casillas del array,
    //si todas son diferentes a null es que nadie a ganado y se a empatado
    return newBoard.every((Square) => Square !== null);
  };

