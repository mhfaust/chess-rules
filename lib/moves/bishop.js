System.register(["position-utils/index", "constants/move-vectors"], function (exports_1, context_1) {
    "use strict";
    var index_1, move_vectors_1;
    var __moduleName = context_1 && context_1.id;
    function bishop(board, initialPosition) {
        var player = index_1.playerAt(board, initialPosition);
        var attackedPositions = [];
        move_vectors_1.bishopVectors.forEach(function (vector) {
            var examinedPosition = index_1.displaceTo(initialPosition, vector);
            while (index_1.isOnBoard(examinedPosition) && index_1.isUnOccupied(board, examinedPosition)) {
                attackedPositions.push(examinedPosition);
                examinedPosition = index_1.displaceTo(examinedPosition, vector);
            }
            if (index_1.isOnBoard(examinedPosition) && index_1.isOccupiedByPlayer(board, examinedPosition, index_1.otherPlayer(player)))
                attackedPositions.push(examinedPosition);
        });
        return new Set(attackedPositions.map(index_1.algebraicName));
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (move_vectors_1_1) {
                move_vectors_1 = move_vectors_1_1;
            }
        ],
        execute: function () {
            exports_1("default", bishop);
        }
    };
});
//# sourceMappingURL=bishop.js.map