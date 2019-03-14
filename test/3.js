/**
 * Created by Administrator on 2017/5/19.
 */
var a = ["A","B","C"];
var b = [""];
function main() {
    var a1 = new objPL(a);//计算数组a的排列组合
    var b1 = new objPL(b);//计算数组b的排列组合
    var str = "";
    var n = 0;
    //a1和b1的排列组合个数就是两者相乘（双层循环）
    for (var i = 0; i < a1.length; i++) {
        for (var j = 0; j < b1.length; j++) {
            str += a1[i] + b1[j] + " ";
            n++;
        }
        str += "";
    }
    console.log("共" + n + "个");
    console.log(str);
}
main();
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
    for (var i = 1; i <= this.a.length; i++) {
        this.mGetN(0, i, "");
    }
    return this.r;
}