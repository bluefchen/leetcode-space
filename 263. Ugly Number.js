/**
 * Created by Administrator on 2017/5/17.
 */

var isUgly = function(num){
    if(num <= 0){
        return false;
    }
    if(num <= 6){
        return true;
    }
    while(num>2){
        if(num%2 !=0){
            break;
        }
        num /=2;
    }
    while(num > 3){
        if(num%3 != 0){
            break;
        }
        num /= 3;
    }
    while(num >5){
        if(num %5 !=0){
            break
        }
        num /=5;
    }
    return num%2 ===0 || num%3 ===0 || num%5 ===0;
};

console.log(isUgly(14));