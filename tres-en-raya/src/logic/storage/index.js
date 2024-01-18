export const saveGameToStorage = ({ board, turn }) => {
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

export const resetGameStorage = () => {
    //guarda la partida en el localstorage
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}