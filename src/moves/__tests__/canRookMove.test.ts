import canRookMove from 'moves/canRookMove';
import { Position } from 'constants/position';
import { BK,BR,BP,WP,__ } from 'board-utils/pieces-shorthand';

const rook1Board = (): Board => [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,BP,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,__,__],
/*  D  */ [__,__,__,__,__,__,__,__],
/*  E  */ [__,WP,__,BR,__,__,__,BK],
/*  F  */ [__,__,__,__,__,__,__,__],
/*  G  */ [__,__,__,__,__,__,__,__],
/*  H  */ [__,__,__,WP,__,__,__,__],
];

describe('canRookMove', () => {

    it('cannot move to its current position', () => {
        expect(canRookMove(rook1Board(), Position.E4, Position.E4)).toBe(false);
    });

    describe('along rank', () => {
        it('cannot pass over opponent piece: (E4 -> E1)', () => {
            expect(canRookMove(rook1Board(), Position.E4, Position.E1)).toBe(false);
        });

        it('can capture: (E4 -> E2)', () => {
            expect(canRookMove(rook1Board(), Position.E4, Position.E2)).toBe(true);
        });

        it('can: (E4 -> E3)', () => {
            expect(canRookMove(rook1Board(), Position.E4, Position.E3)).toBe(true);
        });

        it('can: (E4 -> E5)', () => {
            expect(canRookMove(rook1Board(), Position.E4, Position.E5)).toBe(true);
        });

        it('can : (E4 -> E6)', () => {
            expect(canRookMove(rook1Board(), Position.E4, Position.E6)).toBe(true);
        });
    
        it('can move along rank  (E4 -> E7)', () => {
            expect(canRookMove(rook1Board(), Position.E4, Position.E7)).toBe(true);
        });
    
        it('cannot move onto own players piece', () => {
            expect(canRookMove(rook1Board(), Position.E4, Position.E8)).toBe(false);
        })
    })

    describe('along file', () => {

    })
    
})