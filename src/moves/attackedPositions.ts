import { king, queen, bishop, knight, rook, pawn } from 'moves/index';
import { Piece } from 'constants/pieces'
const { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,Empty,__ } = Piece;

const moveStrategies = {
    [BK]: king,
    [WK]: king,
    [WQ]: queen,
    [BQ]: queen,
    [WB]: bishop,
    [BB]: bishop,
    [WN]: knight,
    [BN]: knight,
    [WR]: rook,
    [BR]: rook,
    [WP]: pawn,
    [BP]: pawn
}

function attackedPositions(board: Board, position: GridCoordinates, piece: string)
    : Set<string> {
        return moveStrategies[piece](board, position);
}

export default attackedPositions;