/**
 * Created by Administrator on 2017/5/19.
 */
var str = [1,2,3,4,5];
var count = 0;
function arrange(s){
    for(var i=0,length=str.length; i<length; i++) {
        if(s.length == length - 1) {
            if(s.indexOf(str[i]) < 0) {
                count++;
                console.log("组合"+count+"="+s + str[i]);
            }
            continue;
        }
        if(s.indexOf(str[i]) < 0) {
            arrange(s+str[i]);
        }
    }
}
arrange('');