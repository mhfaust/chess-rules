import { Piece } from 'constants/pieces';

type BoardFile =  [string,string,string,string,string,string,string,string];

type Board = [
    BoardFile,
    BoardFile,
    BoardFile,
    BoardFile,
    BoardFile,
    BoardFile,
    BoardFile,
    BoardFile
];

//note: if a string is null --> empty square.