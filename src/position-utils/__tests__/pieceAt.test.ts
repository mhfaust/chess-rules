import pieceAt from 'position-utils/pieceAt'
import { initialBoard } from 'board-utils/index'
import { Position } from 'constants/algebraic'


import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'board-utils/pieces-shorthand';

describe('pieceAt', () => {
    it('gets the white queen knight from the initial board', () => {
        expect(pieceAt(initialBoard(), Position.B1)).toBe(Piece.WhiteKnight);
    });

    it('gets the black queen from the inital board', () => {
        expect(pieceAt(initialBoard(), Position.D8)).toBe(Piece.BlackQueen)
    })

    it('gets null for a square without a piece', () => {
        expect(pieceAt(initialBoard(), Position.A3)).toBe(Piece.Empty);
    })
})