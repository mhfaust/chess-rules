import { Piece, Player } from 'constants/pieces'

import { kingVectors, knightVectors, rookVectors, bishopVectors, pawnBlackAttackVectors, pawnWhiteAttackVectors } 
    from 'constants/move-vectors'

const { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP } = Piece;

export const whiteAttackPatterns = [            
    {name: WP, vectors: pawnWhiteAttackVectors, canMoveLikeThis: new Set([WP, WQ, WB, WK]), onlyOnce: true},
    {name: WK, vectors: kingVectors, canMoveLikeThis: new Set([WK, WQ]), onlyOnce: true},
    {name: WN, vectors: knightVectors, canMoveLikeThis: new Set([WN]), onlyOnce: true},
    {name: WB, vectors: bishopVectors, canMoveLikeThis: new Set([WB, WQ]), onlyOnce: false},
    {name: WR, vectors: rookVectors, canMoveLikeThis: new Set([WR, WQ]), onlyOnce: false},
];

export const blackAttackPatterns = [            
    {name: BP, vectors: pawnBlackAttackVectors, canMoveLikeThis: new Set([BP, BQ, BB, BK]), onlyOnce: true},
    {name: BK, vectors: kingVectors, canMoveLikeThis: new Set([BK, BQ]), onlyOnce: true},
    {name: BN, vectors: knightVectors, canMoveLikeThis: new Set([BN]), onlyOnce: true},
    {name: BB, vectors: bishopVectors, canMoveLikeThis: new Set([BB, BQ]), onlyOnce: false},
    {name: BR, vectors: rookVectors, canMoveLikeThis: new Set([BR, BQ]), onlyOnce: false},
];