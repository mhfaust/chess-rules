System.register(["check/isInCheck", "constants/pieces", "constants/algebraic"], function (exports_1, context_1) {
    "use strict";
    var isInCheck_1, pieces_1, pieces_2, algebraic_1, BK, BQ, BR, BN, BB, BP, WK, WQ, WR, WN, WB, WP, Empty, __;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (isInCheck_1_1) {
                isInCheck_1 = isInCheck_1_1;
            },
            function (pieces_1_1) {
                pieces_1 = pieces_1_1;
                pieces_2 = pieces_1_1;
            },
            function (algebraic_1_1) {
                algebraic_1 = algebraic_1_1;
            }
        ],
        execute: function () {
            BK = pieces_2.Piece.BK, BQ = pieces_2.Piece.BQ, BR = pieces_2.Piece.BR, BN = pieces_2.Piece.BN, BB = pieces_2.Piece.BB, BP = pieces_2.Piece.BP, WK = pieces_2.Piece.WK, WQ = pieces_2.Piece.WQ, WR = pieces_2.Piece.WR, WN = pieces_2.Piece.WN, WB = pieces_2.Piece.WB, WP = pieces_2.Piece.WP, Empty = pieces_2.Piece.Empty, __ = pieces_2.Piece.__;
            describe('isInCheck: true', function () {
                it('rook checks king along a rank', function () {
                    var board = [
                        [__, __, __, __, __, __, __, __],
                        [__, __, WR, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, BK, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                    ];
                    expect(isInCheck_1["default"](board, pieces_1.Player.Black, algebraic_1.Position.E3)).toBe(true);
                });
                it('rook checks king along a file', function () {
                    var board = [
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, BK, __, __, __, __, WR],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                    ];
                    expect(isInCheck_1["default"](board, pieces_1.Player.Black, algebraic_1.Position.E3)).toBe(true);
                });
            });
        }
    };
});
//# sourceMappingURL=isInCheck.fromRook.test.js.map