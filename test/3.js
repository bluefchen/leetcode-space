/**
 * Created by Administrator on 2017/5/19.
 */
var a = ["A","B","C"];
var b = [""];
function main() {
    var a1 = new objPL(a);//��������a���������
    var b1 = new objPL(b);//��������b���������
    var str = "";
    var n = 0;
    //a1��b1��������ϸ�������������ˣ�˫��ѭ����
    for (var i = 0; i < a1.length; i++) {
        for (var j = 0; j < b1.length; j++) {
            str += a1[i] + b1[j] + " ";
            n++;
        }
        str += "";
    }
    console.log("��" + n + "��");
    console.log(str);
}
main();
//ȡ������������
function objPL(arr) {
    this.a = arr;
    this.r = [];
    this.n = 0;
    //��M��������ȡN��(�ݹ�)
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