System.register(["position-utils/pieceAt", "boards/index", "constants/algebraic", "constants/pieces"], function (exports_1, context_1) {
    "use strict";
    var pieceAt_1, index_1, algebraic_1, pieces_1, BK, BQ, BR, BN, BB, BP, WK, WQ, WR, WN, WB, WP, Empty, __;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pieceAt_1_1) {
                pieceAt_1 = pieceAt_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (algebraic_1_1) {
                algebraic_1 = algebraic_1_1;
            },
            function (pieces_1_1) {
                pieces_1 = pieces_1_1;
            }
        ],
        execute: function () {
            BK = pieces_1.Piece.BK, BQ = pieces_1.Piece.BQ, BR = pieces_1.Piece.BR, BN = pieces_1.Piece.BN, BB = pieces_1.Piece.BB, BP = pieces_1.Piece.BP, WK = pieces_1.Piece.WK, WQ = pieces_1.Piece.WQ, WR = pieces_1.Piece.WR, WN = pieces_1.Piece.WN, WB = pieces_1.Piece.WB, WP = pieces_1.Piece.WP, Empty = pieces_1.Piece.Empty, __ = pieces_1.Piece.__;
            describe('pieceAt', function () {
                it('gets the white queen knight from the initial board', function () {
                    expect(pieceAt_1["default"](index_1.initialBoard(), algebraic_1.B1)).toBe(WN);
                });
                it('gets the black queen from the inital board', function () {
                    expect(pieceAt_1["default"](index_1.initialBoard(), [3, 7])).toBe(BQ);
                });
                it('gets null for a square without a piece', function () {
                    expect(pieceAt_1["default"](index_1.initialBoard(), [0, 2])).toBe(__);
                });
            });
        }
    };
});
//# sourceMappingURL=pieceAt.test.js.map