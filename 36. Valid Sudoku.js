/**
 * Created by Administrator on 2017/6/17.
 */

var isValidSudoku = function (board) {
    var boxs = [[],[],[],[],[],[],[],[],[]];

    function validRepeat(array) {
        {
            var map = [];
            for (var i = 0; i < array.length; i++) {
                if(array[i] == ".") continue;
                if (map.indexOf(array[i] == -1)) {
                    map.push(array[i])
                } else {
                    return false;
                }
            }
            return true;
        }
    }

    for(var i = 0; i< 9; i++){
        if(!validRepeat(board[i])){
            return false;
        }

        var cRow = [];
        for(var j =0 ; j<9 ;j++){
            cRow.push(board[j][i])
        }

        if(!validRepeat(cRow)){
                return false;
        }

        //判断属于第几个九宫格
        for(var l =0; l< 9 ;l++){
            var boxId = 3*parseInt(i/3)+parseInt(l/3);
            boxs[boxId].push(board[i][l]);
        }


       if(!validRepeat(boxs[i])){
           return false;
       }
    }
    return true;
};