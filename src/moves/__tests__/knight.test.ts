import knight from 'moves/knight';
import { initialBoard } from 'boards/index';
import { textRender } from 'board-utils/index';
import { B1,B8,G1,G8 } from 'constants/algebraic';

beforeAll(() => console.log(textRender(initialBoard())))

describe('knight', () => {
    it('can move from initial board white queen knight to A3 and C3 only', () => {
        const attackedPositions = knight(initialBoard(), B1);
        
        expect(attackedPositions).toContain('A3')
        expect(attackedPositions).toContain('C3')
        expect(attackedPositions.size).toBe(2)
    });

    it('can move from initial board white king knight to A3 and C3 only', () => {
        const attackedPositions = knight(initialBoard(), G1);
        
        expect(attackedPositions).toContain('F3')
        expect(attackedPositions).toContain('H3')
        expect(attackedPositions.size).toBe(2)
    });

    it('can move from initial board black queen knight to A3 and C3 only', () => {
        const attackedPositions = knight(initialBoard(), B8);
        
        expect(attackedPositions).toContain('A6')
        expect(attackedPositions).toContain('C6')
        expect(attackedPositions.size).toBe(2)
    });

    it('can move from initial board black king knight to A3 and C3 only', () => {
        const attackedPositions = knight(initialBoard(), G8);
        
        expect(attackedPositions).toContain('F6')
        expect(attackedPositions).toContain('H6')
        expect(attackedPositions.size).toBe(2)
    });
})