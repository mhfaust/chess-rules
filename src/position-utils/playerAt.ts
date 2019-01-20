import { pieceAt } from 'position-utils/index';
import { Player, ALL_PIECES, BLACK_PIECES } from 'constants/pieces'

const playerAt = (board: Board, position: GridCoordinates): string => {
    const piece = pieceAt(board, position);

    if(!ALL_PIECES.has(piece))
        return null;
     
    return BLACK_PIECES.has(piece)  ? Player.Black : Player.White;
}

export default playerAt;