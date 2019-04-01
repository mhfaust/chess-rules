function areSamePositions  (
    posA: GridCoordinates, 
    posB: GridCoordinates)
    : boolean {
        return posA[0] === posB[0] && posA[1] === posB[1];
    } 

export default areSamePositions;