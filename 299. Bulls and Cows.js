/**
 * Created by Administrator on 2017/6/22.
 */
var getHint = function (secret , guess) {
    var bull = 0;
    var cow = 0;

    var sKeep =[];
    var gkeep =[];
    var guess = guess.split('');
    var secret =secret.split('');

    for(var i in guess){
        if(secret[i] == guess [i]){
            bull ++;
        }else{
            sKeep.push((secret[i]));
            gkeep.push(guess[i]);
        }
    }

    for(var j in gkeep){
        var findIndex = sKeep.indexOf(gkeep[j]);
        if(findIndex != -1){
            cow ++;
            sKeep[findIndex] = null;
        }
    }
    return bull+"A"+cow+"B"
};
console.log(getHint(1234,'1234'));