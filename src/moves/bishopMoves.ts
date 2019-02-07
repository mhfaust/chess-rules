import { playerAt, displaceTo, isOnBoard, isUnOccupied, isOccupiedByPlayer, 
        otherPlayer, positionName, locatePiece } 
    from 'position-utils/index';

import { bishopVectors } from 'constants/move-vectors'
import { isInCheck } from 'check/index';
import { nextBoard } from 'moves/index';
import movesIntoCheck from 'check/movesIntoCheck';

function bishop(board: Board, moveFrom: GridCoordinates, kingPosition: GridCoordinates): Set<PositionName> {
    
    const player = playerAt(board, moveFrom);

    const legalMoves: Array<GridCoordinates> = [];

    bishopVectors.forEach((vector: MoveVector):void => {

        let examinedPosition = displaceTo(moveFrom, vector);

        while(isOnBoard(examinedPosition) && isUnOccupied(board, examinedPosition)){
            
            legalMoves.push(examinedPosition);
            examinedPosition = displaceTo(examinedPosition, vector);
        }
        if(isOnBoard(examinedPosition) && isOccupiedByPlayer(board, examinedPosition, otherPlayer(player))){
            
            legalMoves.push(examinedPosition);
        }
    });

    return new Set(legalMoves
        .filter(moveTo => !movesIntoCheck(board, moveFrom, moveTo, kingPosition))
        .map(positionName)
    );
}

export default bishop;