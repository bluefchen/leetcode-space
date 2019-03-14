/**
 * Created by Administrator on 2017/5/19.
 */

var palindromesNum = function(str){
    var sum;
    var numbers =[];
    numbers[0] = str.length;

    var store = [];
    var array = [];
    var sigleSum = 0;
    for(var i=0; i<str.length; i++){
        var str1 = str.substring('',i);
        var str2 = str.substring(i+1,str.length);
        console.log('str='+str1,'str2='+str2);

        if (str1.length > str2.length) { //更长的一段作为存储数组
            store = str1.split('');
            array = str2.split('');
        }else {
            store = str2.split('');
            array = str1.split('');
        }

        //2个和2个以上
        console.log(array);
        var array_jPL = objPL(array);
        var array_rev = reverseString_Up(array_jPL);

        console.log('3numb'+array_jPL,array_rev,store);

        containTimes(store.join(''),array_rev.join(''));

        //tempResult.push(containTimes);



        //tempResult.length+1表示，1个的个次，
        for(var j =0; j< array.length; j++){
            if(store.indexOf(array[j]) >=0){
                sigleSum++;
                console.log('sigleSum'+sigleSum);
                store.splice([store.indexOf(array[j])],1);
            }
        }




    }
    sum = sigleSum+mutiSum + str.length;
    console.log('lastResult= '+sum);
    return sum;
};

    //反转字符串
    var reverseString_Up = function(s) {
        var ary = s.join('').split('');
        for(var i = 0, max = (ary.length-1)/2 ; i < max   ; i++){
            var temp = ary[i];
            ary[i] = ary[ary.length - 1 - i];
            ary[ary.length - 1 - i] = temp;
        }
        return ary;
    };

    //取数组的排列组合
    function objPL(arr) {
        this.a = arr;
        this.r = [];
        this.n = 0;
        //从M个数里面取N个(递归)
        this.mGetN = function (curIndex, num, curSelect) {
            if (num == 0) {
                this.r[this.n++] = curSelect;
                return;
            }
            if (this.a.length - curIndex < num) return;
            this.mGetN(curIndex + 1, num - 1, curSelect + this.a[curIndex]);
            this.mGetN(curIndex + 1, num, curSelect);
        };
        for (var i = 2; i <= this.a.length; i++) {
            this.mGetN(0, i, "");
        }
        //console.log(this.r);
        return this.r;
    }

var mutiSum = 0;

var containTimes = function (stores,str) {
    console.log(stores,str);
    //stores =stores2.s plit('');


    for (var z = 0,stores2 =stores; z<stores2.length; z++){
        var temp =stores2.substring(z,stores2.length).split('');
        for(var n =0; n<str.length; n++){

            if( temp.indexOf(str[n])>=0 && n!= str.length-1 ){
                temp.splice([stores2.indexOf(str[n])],1);
                //console.log( temp);

                continue;
            }
            if( temp.indexOf(str[n])>=0 && n== str.length-1 ){
                mutiSum ++;
                break;
            }
            if( temp.indexOf(str[n])<0){
                break;
            }
        }
    }


    console.log(mutiSum);
    return mutiSum;

};

palindromesNum('abcba')