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
    console.log(this.r);
    return this.r;
}
objPL('abc');