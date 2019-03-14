/**
 * Created by Administrator on 2017/5/19.
 */
var sum = 0;
var containTimes = function (stores,str) {
    console.log(str);
    //stores =stores2.s plit('');


    for (var z = 0,stores2 =stores; z<stores2.length; z++){
        var temp =stores2.substring(z,stores2.length).split('');
        for(var n =0; n<str.length; n++){

            if( temp.indexOf(str[n])>=0 && n!= str.length-1 ){
                temp.splice([stores2.indexOf(str[n])],1);
                console.log( temp);

                continue;
            }
            if( temp.indexOf(str[n])>=0 && n== str.length-1 ){
                sum ++;
                break;
            }
            if( temp.indexOf(str[n])<0){
                break;
            }
        }
    }


    console.log(sum);
    return sum;

};




containTimes('axbcb','');